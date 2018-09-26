let mongoose = require("mongoose");

let contactInfo = mongoose.model("contactInfo", {
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  comments: {
    type: String,
  }
});

module.exports = { contactInfo };