const {getAllTheTypes, getTypeById, postType, deleteTypeById} = require('./types.services');
const router = require('express').Router();
const passport = require('passport');
const adminValidate = require('../middlewares/role.middleware');
require('../middlewares/auth.middleware')(passport);

// types router

router.route('/')
    .get(getAllTheTypes)
    .post(passport.authenticate('jwt', {session: false}), adminValidate, postType);

router.route('/:id')
    .get(getTypeById)
    .delete(passport.authenticate('jwt', {session: false}), adminValidate, deleteTypeById);

module.exports = router;