const recipeControllers = require('./recipes.controller');

const getAllRecipes = (req, res) => {
    recipeControllers.getAllRecipes()
        .then((recipes) => {
            res.status(200).json(recipes);
        })
        .catch((err) => {
            res.status(400).json({message: err.message});
        });
}

const getRecipeById = (req, res) => {
    const id = req.params.recipeId;
    recipeControllers.getRecipeById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data);
            }
            else {
                res.status(404).json({message: `Recipe ${id} not found`});
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message});
        }
    );
}

const createRecipe = (req, res) => {
    const userId = req.body.userId;
    const {title, description, urlImg, time, portions, categoryId, origin} = req.body;

    if (title && description && time && portions && categoryId && origin) {
        recipeControllers.createRecipe({title , description , urlImg , time , portions , userId , categoryId , origin})
            .then((data) => {
                res.status(201).json(data);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    } else {
        res.status(400).json({message: 'Missing fields', fields: {title: 'string', description: 'string', time: 'number', portions: 'number', categoryId: 'number'}});
    }
}

const patchRecipe = (req, res) => {
    const id = req.params.recipeId;
    const {title, description, urlImg, time, portions, categoryId, origin} = req.body;

    recipeControllers.updateRecipe(id, {title, description, urlImg, time, portions, categoryId, origin})
        .then((data) => {
            if (data[0]) {
                res.status(200).json({message: `Recipe ${id} updated`});
            } else {
                res.status(404).json({message: `Recipe ${id} not found`});
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message});
        });
}

const deleteRecipe = (req, res) => {
    const id = req.params.recipeId;
    recipeControllers.deleteRecipe(id)
        .then((data) => {
            if (data) {
                res.status(204).json();
            } else {
                res.status(404).json({message: `Recipe ${id} not found`});
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message});
        });
}

const getRecipesUser = (req, res) => {
    const userId = req.user.id;
    recipeControllers.getMyRecipes(userId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({message: err.message});
        });
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    patchRecipe,
    deleteRecipe,
    getRecipesUser
}