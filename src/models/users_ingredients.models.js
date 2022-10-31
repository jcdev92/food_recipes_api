const {DataTypes} = require('sequelize');
const db = require('../utils/database');
const Users = require('./users.models');
const Ingredients = require('./ingredients.models');

const UsersIngredients = db.define('users_ingredients', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            model: Users,
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

module.exports = UsersIngredients;