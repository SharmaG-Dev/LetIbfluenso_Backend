const mongoose = require("../connections");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  websiteLink: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  brandavatar: String,
  OwnerStatus: String,
  hiredInfluencer: String,
  savedProfiles: [],
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("BrandUsers", schema);

module.exports = model;
