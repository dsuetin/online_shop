const {BikeClass} = require("../models/models");
const ApiError = require('../error/ApiError');
class BikeClassController {

    async  create(req, res) {
        const {name} = req.body
        const bike_class = await BikeClass.create({name})
        return res.json(bike_class)
    }

    async getAll(req, res) {
        const bike_class = await BikeClass.findAll()
        return res.json(bike_class)
    }

}

module.exports = new BikeClassController()