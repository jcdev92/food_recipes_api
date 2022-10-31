const categoryControllers = require('./categories.controller');

const getAllCategories = (req, res) => {
    categoryControllers.getAllCategories()
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(err => {
            res.status(400).json(err);
        });
}

const getCategoryById = (req, res) => {
    const {id} = req.params;
    categoryControllers.getCategory(id)
        .then(data => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(400).json({message: `Category ${id} not found`});
            }
        })
        .catch(err => {
            res.status(400).json(err);
        });
}

const postCategory = (req, res) => {
    const {name} = req.body;
    if (name) {
    categoryControllers.createCategory(name)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(400).json({message: err.message});
        });
    } else {
        res.status(400).json({message: 'Category name is required'});
    }
}

const deleteCategory = (req, res) => {
    const {id} = req.params;
    categoryControllers.deleteCategory(id)
        .then(data => {
            if (data) {
                res.status(200).json({message: `Category ${id} deleted`});
            } else {
                res.status(400).json({message: `Category ${id} not found`});
            }
        })
        .catch(err => {
            res.status(400).json(err);
        });
}

module.exports = {
    getAllCategories,
    getCategoryById,
    postCategory,
    deleteCategory
}