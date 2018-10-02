const mongoose = require("mongoose");

const contactInfo = mongoose.model("contactInfo", {
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