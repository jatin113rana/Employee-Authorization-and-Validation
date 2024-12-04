const jwt = require('jsonwebtoken')


const verifyToken =(req,res,next)=>{
// EXTRACT JWT TOKEN FROM THE REQUEST HEADER
const token = req.headers['authorization'];
console.log(token);
const secret_key = process.env.JWT_SECRET_KEY
if (!token) return res.status(401).json({ message: 'Access Denied. No Token Provided.'})
else{
    try {
        //  Verify the jwt token
        console.log(secret_key)
        const decoded =  jwt.verify(token,secret_key)
        // Attach user information to request object
        req.user = decoded
        next();
    } catch (error) {
        console.log(error);
    }
}
}

// Function to Generate Token
const generateToken=(userData)=>{
    return jwt.sign(userData,process.env.JWT_SECRET_KEY)//!check usr data or payload
}


module.exports = {verifyToken,generateToken}
