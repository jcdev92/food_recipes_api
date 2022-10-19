//? Dependencies
const express = require('express');
const database = require('./utils/database');

//? Files
const {port} = require('./config');
const usersRouter = require('./users/users.router');
const authRouter = require('./auth/auth.router');

//? Initial Configs
const app = express();

//? Middlewares
app.use(express.json());

//? Routes
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/auth', authRouter)


database.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

database.sync()
    .then(() => console.log('Database synced...'))
    .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!', users: `localhost:${port}/api/v1/users`});
});

//? Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});