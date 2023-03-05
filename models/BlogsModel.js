const mongoose = require('mongoose');

// schema for the blog modal
const schema = mongoose.Schema({
    userId:String,
    brand:String,
    blogImage:String,
    blogTitle:String,
    personRequired:String,
    blogDisc:String,
},{
    timestamps:true
})


const BlogModel = mongoose.model("blogmodel", schema)

module.exports = BlogModel ;