const router = require('express').Router();
const passport = require('passport');
const adminValidate = require('../middlewares/role.middleware');
require('../middlewares/auth.middleware')(passport);

const {getAllCategories, getCategoryById, postCategory, deleteCategory} = require('./categories.services');

router.route('/')
    .get(getAllCategories)
    .post(passport.authenticate('jwt', {session: false}), adminValidate, postCategory); // It will protected by the admin role

router.route('/:id')
    .get(getCategoryById)
    .delete(passport.authenticate('jwt', {session: false}), adminValidate, deleteCategory); // It will protected by the admin role

module.exports = router;