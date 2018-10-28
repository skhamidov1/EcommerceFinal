const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({       //For contact form info
    extended: true
  })
);

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

app.get("/inventory/:id", (req, res) => {
  const id = Number(req.params.id);
  connection.query(`SELECT * FROM Cars WHERE carId = ${id}`, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.get("/form_submission", (req, res) => {
    connection.query("SELECT * FROM  UserContact", (err, rows) => {
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

  const postQuery = `INSERT INTO Cars (name, description, price,rentPrice, engine, category, image)
        VALUES ("${name}","${description}","${price}","${rentPrice}","${engine}","${category}","${image}")`;

  connection.query(postQuery, err => {
    if (err) throw err;
    res.status(200).redirect("http://localhost:3000/admin");
  });
});

app.post("/form_submission", (req, res) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      comments,
    } = req.body;
  
    const postQuery = `INSERT INTO UserContact (firstName, lastName, email, phone, comments)
    VALUES ("${firstName}","${lastName}","${email}","${phone}","${comments}")`;
  
    connection.query(postQuery, (err, rows) => {
      if (err) throw err;
      res.status(200).redirect("http://localhost:3000/contact");
    });
  });

app.delete("/inventory/:id", (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM Cars WHERE carId = ${id}`, (err, rows) => {
    if (err) throw err;
    res.status(200).send(`Row With Id of ${id} Was Deleted`);
  });
});

app.put("/inventory/:id", (req, res) => {
  const id = req.params.id;
  const {
    name,
    description,
    price,
    rentPrice,
    engine,
    category,
    image
  } = req.body;
  const insertQuery = `UPDATE Cars SET name = "${name}", description = "${description}", price = "${price}",
      rentPrice = "${rentPrice}", engine = "${engine}", category = "${category}", image = "${image}"
      WHERE carId = ${id}`;

  connection.query(insertQuery, err => {
    if (err) throw err;
    res.status(200).send(`Row With Id of ${id} Was Updated`);
 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
