const uuid = require('uuid');
const Recipes = require('../models/recipes.models');

const getAllRecipes = async () => {
    return await Recipes.findAll();
}

const getRecipeById = async (id) => {
    return await Recipes.findOne({where: id});
}

const createRecipe = async (data) => {
    return Recipes.create({
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

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}