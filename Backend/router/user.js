const router = require("express").Router();
const User = require("../Modals/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWTSEC = "@#$%35sldfn";
const {verifyToken} = require("./verifytoken")
const { body, validationResult } = require('express-validator');

router.post("/create/user", 
    body('email').isEmail(),
    body('username').isLength({ min: 5 }),
    body('password').isLength({ min: 6 }),
    body('phonenumber').isLength({min:10}),
    
    async(req,res)=>{
        const error = validationResult(req);

        if(!error.isEmpty()){
              return res.status(400).json("some error");  
        }

        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password,salt);

        try{
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(200).json("Please login with correct passoword");
        };
        user = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:secpass,
            profile:req.body.profile,
            phonenumber:req.body.phonenumber
        })

        const accessToken = jwt.sign({
            id:user._id,
            username:user.username,
        }, JWTSEC);

        await user.save();
        res.status(200).json({user,accessToken}); 
    }catch(error){
        return res.status(400).json("Internal error occured");
    }

})

router.post("/login", async(req,res)=>{
    body('email').isEmail(),
    body('password').isLength({ min: 6 })

    const error = validationResult(req);

    if(!error.isEmpty()){
            return res.status(400).json("some error");  
    }
    try{
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return res.status(400).json("User not Found");
    }
    const ComparedPassword = await bcrypt.compare(req.body.password, user.password);
    if(!ComparedPassword){
        return res.status(400).json("Password Incorrect");
    }

    const accessToken = jwt.sign({
        id:user._id,
        username:user.username
    },JWTSEC);
    const {password, ...other} = user._doc;
    res.status(200).json({user, accessToken});
}catch(error){
     res.status(400).json("Internal error occured")}
}
)
//Following

router.put("/following/:id", verifyToken, async(req,res)=>{
    if(req.params.id !== req.body.user){
        const user = await User.findById(req.params.id);
        const otheruser = await User.findById(req.body.user);
        

        if(!user.Followers.includes(req.body.user)) {
            await user.updateOne({$push:{Followers:req.body.user}})
            await otheruser.updateOne({$push:{Following:req.body.user}})
            return res.status(200).json("User has been Followed.")
        }else{
            return res.status(200).json("You already Follow this user");
        }
    }else{
        return res.status(400).json("You cannot follow yourself.")
    }
})




module.exports = router;