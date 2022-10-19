const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const userServices = require('./users.services')
require('../middlewares/auth.middleware')(passport)

//? root and protected route
router.get('/', userServices.getAllUsers)

//TODO el registerUser ira en la ruta /auth/register
// router.post('/auth/register', userServices.registerUser)


//? protected route
router.route('/me')
    .get(passport.authenticate('jwt', {session: false}), userServices.getMyUser)
    .patch(passport.authenticate('jwt', {session: false}), userServices.patchMyUser)
    .delete(passport.authenticate('jwt', {session: false}), userServices.deleteMyUser)

//? dynamical routes by ID /users/:id

router.route('/:id')
    .get(userServices.getUserById)
    .patch(passport.authenticate('jwt', {session: false}), adminValidate, userServices.patchUser)
    .delete(passport.authenticate('jwt', {session: false}), adminValidate, userServices.deleteUser)

module.exports = router