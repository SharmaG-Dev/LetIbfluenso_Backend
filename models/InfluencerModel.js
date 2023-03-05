const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  contact: Number,
  category:String,
  password: String,
  avatar: String,
  coverimage: String,
  createdAt: { type: Date, default: new Date() },
  facebook: Object,
  linkedin: Object,
  youtube: Object,
  instagram: Object,
  personal: Object,
});

const InfluencerModel = mongoose.model("influencerUsers", schema);

module.exports = InfluencerModel;
