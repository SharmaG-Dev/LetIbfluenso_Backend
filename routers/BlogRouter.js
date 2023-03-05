const express = require("express");
const router = express.Router();
const BlogModel = require("../models/BlogsModel");

// to post the blog
router.post("/post", (req, res) => {
    const formdata = req.body
  new BlogModel(formdata)
    .save()
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json({ message: "No data" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


router.get("/get",(req,res) => {

  BlogModel.find({}).then(data => {
    if (data) {
      res.status(200).json(data)
    }else{
      res.status(400).json({message:"error"})
    }
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.delete("/delete/:id" ,(req,res) => {
  const id  = req.params.id

  BlogModel.findByIdAndDelete(id).then(
      res.status(200).json({message :"The Post Deleted"})
  ).catch((err) => {
      res.status(500).json(err)
  })
})






module.exports = router;
