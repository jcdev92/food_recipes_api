const Users = require('./users.models');
const Recipes = require('./recipes.models');
const Ingredients = require('./ingredients.models');
const Instructions = require('./instructions.models');
const Categories = require('./categories.models');
const Types = require('./types.models');
const UsersRecipes = require('./users_recipes.models');
const RecipesIngredients = require('./recipes_ingredients.models');
const UsersIngredients = require('./users_ingredients.models');

const initModels = () => {ç

    //? Users 1:M Recipes
    Users.hasMany(Recipes);
    Recipes.belongsTo(Users);

    //? Users 1:M UsersRecipes
    Users.hasMany(UsersRecipes);
    UsersRecipes.belongsTo(Recipes);

    //? Recipes 1:M UsersRecipes
    Recipes.hasMany(UsersRecipes);
    UsersRecipes.belongsTo(Users);

    //? Users 1:M UsersIngredients
    Users.hasMany(UsersIngredients);
    UsersIngredients.belongsTo(Users);

    //? Ingredients 1:M UsersIngredients
    Ingredients.hasMany(UsersIngredients);
    UsersIngredients.belongsTo(Ingredients);

    //? Recipes 1:M RecipesIngredients
    Recipes.hasMany(RecipesIngredients);
    RecipesIngredients.belongsTo(Recipes);

    //? Ingredients 1:M RecipesIngredients
    Ingredients.hasMany(RecipesIngredients);
    RecipesIngredients.belongsTo(Ingredients);

    //? Recipes 1:M Instructions
    Recipes.hasMany(Instructions);
    Instructions.belongsTo(Recipes);

    //? Recipes 1:M Categories
    Recipes.hasMany(Categories);
    Categories.belongsTo(Recipes);

    //? Recipes 1:M Types
    Recipes.hasMany(Types);
    Types.belongsTo(Recipes);

}

module.exports = initModels;