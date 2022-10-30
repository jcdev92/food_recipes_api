const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
    //? It avoids sequelize to create the fields createdAt and updatedAt
}, {timestamps: false});


module.exports = Categories;