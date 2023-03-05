const express = require("express");
const router = express.Router();
const BrandModel = require("../models/brandModel");



router.get("/home", (req, res) => {
    console.log("Request at User Home");
    res.send("Resonse from User home")
});

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





module.exports = router;