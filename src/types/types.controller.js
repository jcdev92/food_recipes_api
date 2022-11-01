const Types = require('../models/types.models');

// get all types
const getAllTypes = async() => (await Types.findAll());

// get one type
const getOneType = async(id) => (await Types.findOne({ where: id }));

// create type
const createType = async(name) => (await Types.create({ name }));

// delete type
const deleteType = async(id) => (await Types.destroy({ where: id }));

module.exports = {
    getAllTypes,
    getOneType,
    createType,
    deleteType
}





