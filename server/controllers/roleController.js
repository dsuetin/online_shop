const { Role } = require('../models/models')
const ApiError = require('../error/ApiError');

class RoleController {
    async  create(req, res) {
        const {name} = req.body
        console.log('name in RoleController', name)
        console.log('req.body in RoleController', req.body)
        const role = await Role.create({name})
        return res.json(role)
    }

    async getAll(req, res) {
        const roles = await Role.findAll()
        return res.json(roles)
    }                                                                                                               

}

module.exports = new RoleController()