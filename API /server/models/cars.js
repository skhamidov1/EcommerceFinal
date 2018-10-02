let mongoose = require("mongoose");

let allCars = mongoose.model("allCars", {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rentPrice: {
    type: Number,
    required: true
  },
  engine: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }

});

module.exports = { allCars };
