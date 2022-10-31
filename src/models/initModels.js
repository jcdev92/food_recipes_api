const Users = require('./users.models');
const Recipes = require('./recipes.models');
const Ingredients = require('./ingredients.models');
const Instructions = require('./instructions.models');
const Categories = require('./categories.models');
const Types = require('./types.models');
const UsersRecipes = require('./users_recipes.models');
const RecipesIngredients = require('./recipes_ingredients.models');
const UsersIngredients = require('./users_ingredients.models');

const initModels = () => {
    //? Has many has the foreign key in the target model
    //? Belongs to has the foreign key in the source model

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

    //? Recipes M:1 Categories
    Categories.hasMany(Recipes);
    Recipes.belongsTo(Categories);

    //? Ingredients M:1 Types
    Types.hasMany(Ingredients);
    Ingredients.belongsTo(Types);

}

module.exports = initModels;