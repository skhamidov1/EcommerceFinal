const {mongoose}= require("./db/mongoose");
const {allCars} = require('./models/cars')
const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json());
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
    const id = parseInt(req.params.id)
    allCars.findOne({carId: id}).then((cars) => {
        if(cars) {
            res.send(cars)
        } else {
            res.status(404).send("Unable To Find Car With That Id")
        }
    }).catch(err => res.status(400).send(err))
})

// POST
app.post('/inventory', (req, res) => {
    const {carId, name, description, price,
        rentPrice, engine,category, image} = req.body
    const car = new allCars({
        carId,
        name,
        description,
        price,
        rentPrice,
        engine,
        category,
        image
    })

    allCars.findOne({carId}).then((cars) => {
        if(!cars) {
            car.save().then(obj => {
                res.send(obj)
            })
        } else {
            res.status(400).send("Unable To Add Car");
        } 
    })
})

// DELETE
app.delete("/inventory/:id", (req, res) => {
    const id = parseInt(req.params.id)
    allCars.findOneAndDelete({carId: id}).then(cars => {
       if(cars) {
        res.send(cars)
       } else {
        res.status(400).send("Unable To Delete Car");
       }
    }).catch(err => res.status(400).send(err))
})

// UPDATE
app.put("/inventory/:id", (req, res) => {
    const id = parseInt(req.params.id)
    let body = req.body

    allCars.findOneAndUpdate({carId: id}, {$set: body}, {new: true}).then(cars => {
        if(!cars) {
            return res.status(400).send("Unable To Update Car");
        } else {
            res.send(cars)
        }
    }).catch(err => res.status(400).send(err))
})

app.listen(3001);