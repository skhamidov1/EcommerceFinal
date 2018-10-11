const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "road2hire.ninja",
  user: "r2hstudent",
  password: "SbFaGzNgGIE8kfP",
  database: "skhamidov"
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

// GET ALL CARS
app.get("/inventory", (req, res) => {
  connection.query("SELECT * FROM  Cars", (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});
// POST NEW CAR
app.post("/inventory", (req, res) => {
  const {
    name,
    description,
    price,
    rentPrice,
    engine,
    category,
    image
  } = req.body;

  const insertQuery =
    "INSERT INTO Cars (name, description, price,rentPrice, engine, category, image) VALUES ?";
  const values = [
    [name, description, price, rentPrice, engine, category, image]
  ];
  connection.query(insertQuery, [values], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send("One Row Inserted");
    }
  });
});

app.listen(3306);
