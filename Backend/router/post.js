const router = require("express").Router();
const User = require("../Modals/Post");
const {verifyToken} = require("./verifytoken");
const Post = require("../Modals/Post");
const { findById } = require("../Modals/User");

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


//Like

router.put("/:id/like", verifyToken, async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);

        if (!post.like.includes(req.body.user)) {
            await post.updateOne({$push:{like:req.body.user}});
            return res.status(200).json("Post has been liked.");
        }else{
            await post.updateOne({$pull:{like:req.body.user}});
            return res.status(200).json("Post has been unliked.");
        }
    } catch (error) {
        res.status(400).json("Something went wrong.")
    }
    })
//Dislike
router.put("/:id/dislike", verifyToken, async(req,res)=>{
    try {
        
    
        const post = await Post.findById(req.params.id);

        if (!post.like.includes(req.body.user)) {
            await post.updateOne({$push:{dislike:req.body.user}});
            return res.status(200).json("Post has been disliked.");
        }else{
            await post.updateOne({$pull:{dislike:req.body.user}});
            return res.status(200).json("Post has been undisliked.");
        }
    
    } catch (error) {
            res.status(400).json("Something went wrong.")
    }
})

//Comment

router.put("/comment/post", verifyToken, async(req,res)=>{
    const {comment, postid, profile} = req.body;

    const comments = {
        user:req.user.id,
        username:req.user.username,
        comment,
        profile
    }       
   const post = await Post.findById(postid);
   post.comments.push(comments);
   await post.save();
   res.status(200).json(post); 
})

//DeletePost

router.delete("/delete/post/:id", verifyToken, async(req,res)=>{
  //  try {
        const post = await Post.findById(req.params.id);
        if(post.user == req.user.id){
            const deletepost = await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("Successfully removed");
        }else{
            res.status(400).json("You dont have access");
        }
    // }catch(error){
    //     res.status(400).json("something went wrong.")
    // }
})


module.exports = router;