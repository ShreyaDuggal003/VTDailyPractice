const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function verifyToken(token)
{
   const newToken = token.split(" ")
   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
       if (err) return res.status(401).json({ message: "Invalid token" });
       res.json({ user: decoded });
     });
}

module.exports = verifyToken;