const bcrypt = require('bcrypt');

const getHashedPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        return false;
    }
}

module.exports = getHashedPassword