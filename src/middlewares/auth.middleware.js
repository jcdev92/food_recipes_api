const { jwtSecret } = require('../config');
const {getUserById} = require("../users/users.controllers");


//? Middleware to protect routes
//? 1 - check if a token exists
//? 2 - check if the token belongs to a valid user
//? 3 - modify the request object and include req.user with the unhashed user data

// Strategy: Is the way we are going to log in (email and password, google, facebook, etc)

const JwtStrategy = require('passport-jwt').Strategy; //? this is the strategy we are using
const ExtractJwt = require('passport-jwt').ExtractJwt; //? this is the way we are extracting the token

//? Exporting an anonymous function that receives passport as a parameter
module.exports = (passport) => {
    const options = {
        jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'), //? this is the way we are extracting the token
        secretOrKey : jwtSecret //? this is the secret key
    }
    passport.use(new JwtStrategy(options, async(decoded, done) => {
        //? decoded is the data we sent when we created the token
        //? done is a callback function that we have to call when we are done
        // ? done(error, decode)
        try {
            const response = await getUserById(decoded.id);
            if (!response) {
                return done(null, false);
            }
            return done(null, response);
        } catch (error) {
            return done(error, false);
        }
    }))
};