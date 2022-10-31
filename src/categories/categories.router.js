const router = require('express').Router();

const {getAllCategories, getCategoryById, postCategory, deleteCategory} = require('./categories.services');

router.route('/')
    .get(getAllCategories)
    .post(postCategory); // It will protected by the admin role

router.route('/:id')
    .get(getCategoryById)
    .delete(deleteCategory); // It will protected by the admin role

module.exports = router;