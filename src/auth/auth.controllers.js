const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypto");

const loginUser = async (email, password) => {

    //* this controller has two possible answers
    //* 1. credentials are correct, and we return the user
    //* 2. credentials are incorrect and we return a false


    try {
        const user = await getUserByEmail(email);
        //? user.password is hashed password
        const verifiedPassword = await comparePassword(password, user.password);
        if (verifiedPassword) {
            return user;
        } else {
            return false;
        }
    } catch {
        return false;
    }
}

module.exports = {
    loginUser
}