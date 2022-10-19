const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const Users = database.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name",
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name",
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            }
        },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    birthDay: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: "birth_day",
    },
    gender: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "normal",
    },
    country: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "active",
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "is_verified",
        defaultValue: false,
    }
});

module.exports = Users;