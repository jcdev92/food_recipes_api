const {Op} = require("sequelize");
const uuid = require('uuid');
const Recipes = require('../models/recipes.models');
const Users = require('../models/users.models');
const Categories = require('../models/categories.models');
const Instructions = require('../models/instructions.models');
const RecipesIngredients = require('../models/recipes_ingredients.models');
const Ingredients = require('../models/ingredients.models');
const Types = require('../models/types.models');
const usersIngredients = require('../models/users_ingredients.models');

const getAllRecipes = async () => {
    return await Recipes.findAll(
        {
            attributes: {
                exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
            },
        include: [
            {
                model: Categories,
            },
            {
                model: Users,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Instructions,
                attributes: ['step', 'description']
            },
            {
                model: RecipesIngredients,
                include: {
                    model: Ingredients,
                    include: {
                        model: Types,
                    }
                },
            }
        ]
    });
};

const getRecipeById = async (id) => {
    return await Recipes.findOne({
    where: {
            id
    },
    attributes: {
        exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
        },
    include: [
        {
            model: Categories,
        },
        {
            model: Users,
                attributes: ['id', 'firstName', 'lastName']
        },
        {
            model: Instructions,
            attributes: ['step', 'description']
        },
        {
            model: RecipesIngredients,
                include: {
                model: Ingredients,
                    include: {
                    model: Types,
                }
            },
        }
    ]
    });
}

const createRecipe = async (data) => {
    return await Recipes.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        urlImg: data.urlImg,
        time: data.time,
        portions: data.portions,
        userId: data.userId,
        categoryId: data.categoryId,
        origin: data.origin,
        likes: data.likes
    });
}

const updateRecipe = async (id, data) => {
    return await Recipes.update(data, {where: id});
}

const deleteRecipe = async (id) => {
    return await Recipes.destroy({where: id});
}

const getMyRecipes = async (userId) => {

    const userIngredients = await usersIngredients.findAll({
        where: {
            userId
        }
    });


    const userIngredientsIds = userIngredients.map(ingredient => ingredient.ingredientId);
    const recipeIngredients = await RecipesIngredients.findAll({
        where: {
            ingredientId: {
                [Op.in]: userIngredientsIds
            }
        }
    });

    const recipeIngredientsIds = recipeIngredients.map(ingredient => ingredient.recipeId);
    return await Recipes.findAll({
        where: {
            id: {
                [Op.in]: recipeIngredientsIds
            }
        }
    });
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getMyRecipes
}