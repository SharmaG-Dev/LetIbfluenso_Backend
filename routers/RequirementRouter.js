const express = require('express');
const router = express.Router()
const RequirementModel = require('../models/RequirementModel')



router.post("/post" ,(req,res) => {
    
    new RequirementModel(req.body).save().then(data => {
        if (data){
            res.status(200).json(data)
        }else{
            res.status(400).json({message:"error"})
        }
    }).catch((err) =>{
        res.status(500).json(err)
    })
})


// for all data 
router.post("/getall" ,(req,res) => {

    RequirementModel.find({}).then(data => {
        if (data) {
            res.status(200).json(data)
        }else{
            res.status(400).json(data)
        }
    }).catch((err) => {
        res.status(500).json(err)
    })
})


router.get("/get" , (req,res) => {

    RequirementModel.find({}).then(data => {
        if (data) {
            res.status(200).json(data)
        }else{
            res.status(400).json({message:"not found"})
        }
    }).catch((err) => {
        res.status(500).json(err)
    })
})



router.delete("/delete/:id" ,(req,res) => {
    const id  = req.params.id

    RequirementModel.findByIdAndDelete(id).then(
        res.status(200).json({message :"The Post Deleted"})
    ).catch((err) => {
        res.status(500).json(err)
    })
})




module.exports = router ;