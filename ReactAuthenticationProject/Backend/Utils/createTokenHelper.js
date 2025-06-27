const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function createToken(user)
{
   return jwt.sign({ email: user.email }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports = createToken;