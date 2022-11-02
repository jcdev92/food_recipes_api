const {DataTypes} = require('sequelize');

const db = require('../utils/database');
const Recipes = require('./recipes.models');

const Instruction = db.define('instruction', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    step: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        reference: {
            model: Recipes,
            key: 'id'
        }
    }
});

module.exports = Instruction;