const bcrypt = require('bcrypt');

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10);
}

// console.log(hashPassword('123456'));

//? compare Password with Hash
const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword);
}

console.log(comparePassword('123456', '$2b$10$FzzPP0g1m170YKnRKSXGE.F0foBLNX1EdnRUPdhDiZON1k6CkofrK')); //? true

// hash -> contraseña
// token -> datos de usuario

module.exports = {
    hashPassword,
    comparePassword
}