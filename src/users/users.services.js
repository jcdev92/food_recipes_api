const usersControllers = require('./users.controllers');

const getAllUsers = (req, res) => {
    usersControllers.getAllUsers()
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json(error));
}

const getUserById = (req, res) => {
    const {id} = req.params;
    usersControllers.getUserById(id)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(404).json(error));
}

const registerUser = (req, res) => {
    const {firstName, lastName, email, password, phone, birthDay, gender, country} = req.body;
    if (firstName && lastName && email && password && phone && birthDay && gender && country) {
        usersControllers.createUser({firstName, lastName, email, password, phone, birthDay, gender, country})
            .then(data => res.status(201).json(data))
            .catch(error => res.status(400).json(error));
    } else {
        res.status(400).json({message: 'Missing data, complete all fields', fields: {firstName: 'string', lastName: 'string', email: 'example@example.com', password: 'string', phone: '+5212345625', birthDay: 'YYYY/MM/D', gender: 'string', country: 'string'}});
    }
}

const patchUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, email, phone, birthday, gender, country, role} = req.body;
    usersControllers.updateUser(id, {firstName, lastName, email, phone, birthday, gender, country, role})
        .then(data => {if (data[0]) { res.status(200).json({message: `User ${id} updated successfully`}) } else {res.status(404).json({message: `User ${id} not found`})}})
        .catch(error => res.status(400).json(error));
}

const deleteUser = (req, res) => {
    const id = req.params.id
    usersControllers.deleteUser(id)
        .then(data => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getMyUser = (req, res) => {
    const {id} = req.user;
    usersControllers.getUserById(id)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(404).json(error));
}

const patchMyUser = (req, res) => {
    const {id} = req.user;
    const {firstName, lastName, email, phone, birthday, gender, country} = req.body;
    usersControllers.updateUser(id, {firstName, lastName, email, phone, birthday, gender, country})
        .then(() => res.status(200).json({message: `User ${id} updated successfully`}))
        .catch(error => res.status(400).json(error));
}

const deleteMyUser = (req, res) => {
    const {id} = req.user;

    usersControllers.updateUser(id, { status: "inactive" })
        .then(() => {
            res.status(200).json({ message: `Your user was deleted successfully!` });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};




module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    patchUser,
    deleteUser,
    getMyUser,
    patchMyUser,
    deleteMyUser
}