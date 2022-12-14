//? Dependencies
const express = require('express');
const database = require('./utils/database');
const initModels = require('./models/initModels');
const cors = require('cors');

//? Routes
const {port} = require('./config');
const usersRouter = require('./users/users.router');
const authRouter = require('./auth/auth.router');
const categoriesRouter = require('./categories/categories.router');
const typesRouter = require('./types/types.router');
const recipesRouter = require('./recipes/recipes.router');
const ingredientsRouter = require('./ingredients/ingredients.router');


//? Initial Configs
const app = express();

//? Middlewares
app.use(express.json());
app.use(cors());

//? Routes
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoriesRouter)
app.use('/api/v1/recipes', recipesRouter)
app.use('/api/v1/types', typesRouter)
app.use('/api/v1/ingredients', ingredientsRouter)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!', users: `localhost:${port}/api/v1/users`});
});

database.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

database.sync()
    .then(() => console.log('Database synced...'))
    .catch(err => console.log('Error: ' + err));

initModels();


//? Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});