const router = require("express").Router();
const User = require("../Modals/Post");
const {verifyToken} = require("./verifytoken");
const Post = require("../Modals/Post")

router.post("/user/post", verifyToken, async(req, res)=>{
    try {
        let {title,image,video} = req.body;
        let newpost = new Post({

            user:req.user.id,title,image,video
        
        });
    
        const post = await newpost.save();
        res.status(200).json(post);

    } catch (error) {
        res.status(400).json("error occured on post")
    }
});
 

router.get("/get/post", verifyToken, async(req,res)=>{
    try{
        const mypost = await Post.find({user:req.user.id});

        
        if(!mypost){
            return res.status(500).json("Error");
        }
        res.status(200).json(mypost);
    }catch(error){
       res.status(500).json("Oppsies");
    }
})

router.put("/update/post/:id", verifyToken, async(req,res)=>{
    try {
        let post = await Post.findById(req.params.id);

        if(!post){
           return res.status(400).json("Post Doesnot exist/ found.")
        };
        post = await Post.findByIdAndUpdate(req.params.id , {
            $set:req.body
        })
        let updatepost = await post.save();
        res.status(200).json(updatepost);
    } catch (error) {
        res.status(400).json("Error in updateing.")
    }
})
module.exports = router;