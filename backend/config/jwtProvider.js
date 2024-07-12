require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECERET_KEY='eRrF31v3nFUjjBuPsa1DAzzeq5fnBk3YAqEnSX4SH20='
// const SECERET_KEY=process.env.SECERET_KEY

const generateToken=(userId)=>{

    const token=jwt.sign({userId},SECERET_KEY,{ expiresIn: '72h' })
    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECERET_KEY)
    return decodedToken.userId
}


module.exports={generateToken,getUserIdFromToken};