const {DataTypes} = require('sequelize');

const db = require('../utils/database');
const Types = require('./types.models');

const Ingredient = db.define('ingredient', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'type_id',
        reference: {
            model: Types,
            key: 'id'
        }
    },
    urlImg: {
        type: DataTypes.STRING,
        field: 'url_img',
        validate: {
            isUrl: true
        }
    }
});

module.exports = Ingredient;