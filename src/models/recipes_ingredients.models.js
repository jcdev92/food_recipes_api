const {DataTypes} = require('sequelize');

const db = require('../utils/database');
const Recipes = require('./recipes.models');
const Ingredients = require('./ingredients.models');

const RecipesIngredients = db.define('recipes_ingredients', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            model: Recipes,
            key: 'id'
        }
    },
    ingredientId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'ingredient_id',
        references: {
            model: Ingredients,
            key: 'id'
        }
    }

});

module.exports = RecipesIngredients;