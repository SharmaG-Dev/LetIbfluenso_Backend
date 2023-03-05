const express = require("express");
const router = express.Router();
const InfluencerModel = require("../models/InfluencerModel");

router.get("/home", (req, res) => {
  console.log("request at user home");
  res.send("response from user home");
});


router.post("/add", (req, res) => {
  console.log(req.body);

  new InfluencerModel(req.body)
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
  InfluencerModel.findOne({ email: formdata.email, password: formdata.password })
    .then((data) => {
      if (data) {
        console.log("login success");
        res.status(200).json(data);
      } else {
        console.log("login failed");
        res.status(400).json({ message: "failed" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  InfluencerModel.find({})
    .then((data) => {
      console.log("user data fetched!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  InfluencerModel.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("user data deleted!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
router.get("/getbyid/:id", (req, res) => {
  InfluencerModel.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  InfluencerModel.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((data) => {
      console.log("user data updated!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;