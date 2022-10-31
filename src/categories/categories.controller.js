const Categories = require('../models/categories.models');

//? GET all categories
//? GET a category
//? Create a category
//? Delete a category

// GET all categories
const getAllCategories = async() => {
    return await Categories.findAll();
}

// GET a category
const getCategory = async(id) => {
    return await Categories.findOne({where: id});
}

// Create a category
const createCategory = async(name) => {
    return Categories.create(name);
}

// Delete a category
const deleteCategory = async(id) => {
    return await Categories.destroy({where: id});
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    deleteCategory
}