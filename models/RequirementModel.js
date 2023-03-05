const mongoose = require('mongoose')

const schema = mongoose.Schema({
    userid:String,
    brand:String,
    nameofproduct:String,
    needInfluencer:String,
    category:String,
    minFollowers:String,
    socialMedia:String,
    experience:String,
    offerPrice:String
})

const RequirementModel = mongoose.model("requirement" ,schema)

module.exports =RequirementModel ;