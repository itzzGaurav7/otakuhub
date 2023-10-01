const jwt = require("jsonwebtoken");
const JWTSEC = "@#$%35sldfn";

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;

    if(authHeader){
        const token = authHeader;
        jwt.verify(token,JWTSEC,(err,user)=>{
            if(err) return res.status(400).json("Error occured in token verification.");
            req.user = user;
            next();
        })
    }else{
        return res.status(400).json("opps Error");
    }

}

module.exports = {verifyToken};