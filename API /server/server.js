const {mongoose}= require("./db/mongoose");
const {allCars} = require('./models/cars')
const {contactInfo} = require("./models/contactInfo")
const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const _ = require('lodash')
const app = express()
const {ObjectID} = require('mongodb')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ //For contact form info
    extended: true
 }));

app.use(cors())

//GET ALL CARS
app.get('/inventory', (req, res) => {
    allCars.find().then((cars) => {
       if(cars) {
           res.send(cars)
       } else {
        res.status(404).send("Unable To Find Cars")
       }
    }).catch(err => res.status(400).send(err))
})

// GET CARS BY ID
app.get('/inventory/:id', (req, res) => {
    const id = req.params.id

    allCars.findById(id).then((cars) => {
        if(cars) {
            res.send(cars)
        } else {
            res.status(404).send("Unable To Find Car With That Id")
        }
    }).catch(err => res.status(400).send(err))
})

app.get('/form_submission', (req, res) => {
    contactInfo.find().then((info) => {
       if(info) {
           res.send(info)
       } else {
        res.status(404).send("Unable To Find Contact Info")
       }
    }).catch(err => res.status(400).send(err))
})

// POST FORM DATA
app.post("/form_submission", (req, res) => {
    const {firstName, lastName, email, phone,
        comments} = req.body
    const formInfo = new contactInfo({
        firstName,
        lastName,
        email,
        phone,
        comments
    })
    formInfo.save().then(() => {
        res.status(200).redirect("http://localhost:3000/contact")
    })
})

// POST
app.post('/inventory', (req, res) => {
    const {name, description, price,
        rentPrice, engine,category, image} = req.body
    const car = new allCars({
        name,
        description,
        price,
        rentPrice,
        engine,
        category,
        image
    })

    car.save().then(() => {
        res.status(200).redirect("http://localhost:3000/admin")
    }, (e) => {
        res.status(400).send(e);
    })
})

// DELETE
app.delete("/inventory/:id", (req, res) => {
    const id = req.params.id
    
    allCars.findByIdAndDelete(id).then(cars => {
       if(cars) {
        res.send(cars)
       } else {
        res.status(400).send("Unable To Delete Car");
       }
    }).catch(err => res.status(400).send(err))
})

// UPDATE
app.put("/inventory/:id", (req, res) => {
    const id = req.params.id
    const body = _.pick(req.body, [
        "name", "description", "price",
        "rentPrice", "engine","category", "image"
    ])

    allCars.findByIdAndUpdate(id, {$set: body}, {new: true}).then(cars => {
        if(!cars) {
            return res.status(400).send("Unable To Update Car");
        } 
        cars.save().then(updatedCar => console.log(updatedCar)
    )
    }).catch(err => res.status(400).send(err))
})

app.listen(3001);