const {getAllTheTypes, getTypeById, postType, deleteTypeById} = require('./types.services');
const {Router} = require("express");

// types router

Router.route('/')
    .get(getAllTheTypes)
    .post(postType);

Router.route('/:id')
    .get(getTypeById)
    .delete(deleteTypeById);

module.exports = Router;