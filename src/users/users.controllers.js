const Users = require("../models/users.models");
const uuid = require('uuid');
const {hashPassword} = require("../utils/crypto");

const getAllUsers = async () => (await Users.findAll({
    where: {
        status: 'active'
    }
                                                     }))

const getUserById = async (id) => (await Users.findOne({where: {id}}));

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword(data.password),
        phone: data.phone,
        birthDay: data.birthDay,
        gender: data.gender,
        country: data.country
    });
    return newUser;
};

const updateUser = async (id, data) => (await Users.update(data, {where: {id}}));

const deleteUser = async (id) => (await Users.destroy({where: {id}}));

const getUserByEmail = async (email) => (await Users.findOne({where: {email, status: 'active'}}));

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
}