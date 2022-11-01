const Categories = require('../models/categories.models');

//? GET all categories
//? GET a category
//? Create a category
//? Delete a category

// GET all categories
const getAllCategories = async() => (await Categories.findAll());

// GET a category
const getCategory = async(id) => (await Categories.findOne({where: id}));

// Create a category
const createCategory = async(name) => (await Categories.create({name}));

// Delete a category
const deleteCategory = async(id) => (await Categories.destroy({where: id}));

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    deleteCategory
}