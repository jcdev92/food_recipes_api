const {getAllTypes, getOneType, createType, deleteType} = require('./types.controller');

// types services

// get all types

const getAllTheTypes = (req, res) => {
    getAllTypes()
    .then(types => res.status(200).json(types))
    .catch(err => res.status(400).json({message: err.message}));
}

// get type by id

const getTypeById = (req, res) => {
    const {id} = req.params;
    getOneType(id)
    .then(data => {
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({message: `Type with id ${id} not found`});
        }
    })
    .catch(err => res.status(400).json({message: err.message}));
}

// post type

const postType = (req, res) => {
    const {name} = req.body;
    if (name) {
        createType(name)
            .then(data => res.status(201).json(data))
            .catch(err => res.status(400).json({message: err.message}));
    } else {
        res.status(400).json({message: 'Please provide a name for the type'});
    }
}

// delete type

const deleteTypeById = (req, res) => {
    const {id} = req.params;
    deleteType(id)
    .then(data => {
        if(data) {
            res.status(204).json();
        } else {
            res.status(404).json({message: `Type with id ${id} not found`});
        }
    })
    .catch(err => res.status(400).json({message: err.message}));
}

module.exports = {
    getAllTheTypes,
    getTypeById,
    postType,
    deleteTypeById
}