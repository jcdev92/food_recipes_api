const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Users = require('./users.models');
const Categories = require('./categories.models');

const Recipes = db.define('recipes', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        field: 'url_image'
    },
    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portions: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //? The Foreign Keys in sequelize have some rules
    //? 1. It must contain the table that is going to be referenced in singular
    //? 2. It must end with the suffix Id
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            model: Users,
            key: 'id'
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            model: Categories,
            key: 'id'
        }
    },
    origin: {
        type: DataTypes.STRING,
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
});

module.exports = Recipes;
