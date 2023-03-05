const express = require("express");
const router = express.Router();
const BrandModel = require("../models/brandModel");



router.post("/add", (req, res) => {
    console.log(req.body);

    new BrandModel(req.body)
      .save()
      .then((data) => {
          console.log("User Saved !");
          res.status(200).json({ message:"success"});
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
})

router.post("/authenticate", (req, res) => {
    const formdata = req.body;


    console.log(formdata);
    BrandModel.findOne({ email:formdata.email ,password :formdata.password })
    .then((data) => {
        if (data) {
            console.log("Login success");
            res.status(200).json(data);
        } else{
            console.log("Login Failed");
            res.status(400).json({ message : "failed" });
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get("/getall" ,(req,res) => {

    BrandModel.find({}).then(data =>{
        if (data){
            res.status(200).json(data)
        }else{
            res.status(400).json({message:"no users"})
        }
    }).catch((err) => {
        res.status(500).json(err)
    })
})




module.exports = router;