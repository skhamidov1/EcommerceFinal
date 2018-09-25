let mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/allCars",
  { useNewUrlParser: true }
);

module.exports = {mongoose}