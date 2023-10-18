const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { User, Basket, Role } = require('../models/models')
 
const generateJwt = (id, email, roles) => {
    return jwt.sign(
        {id, email, roles},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )

}
class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "lalalal Registration error", errors })
            }
            const {email, password} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Empty email or password'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('User already exist'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            // const userRole = await Role.findOne({role: "USER"})

            // const user = await User.create({email:email, roles: [userRole.name], password: hashPassword})
            const user = await User.create({email:email, user_roles: ['USER', 'ADMIN'],  password: hashPassword})
            const basket = await Basket.create({userId: user.id})
            const token = generateJwt(user.id, user.email, user.user_roles)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Hui Registration error'})
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if (!user) {
                return next(ApiError.internal('Пользьзователь не зарегестрирован'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return next(ApiError.internal('Неверный пароль'))
            }
            console.log("user.user_roles", user.user_roles)
            const token = generateJwt(user.id, user.email, user.user_roles)
            return res.json({token})
        } catch (e) {
            console.log('login error', e)
            res.status(400).json({message: 'login error'})
        }

    }
    async check(req, res, next) {
        try {
            
            const email = req.user.email

            // console.log('we in chek 63636336363', email, req.user.user_roles)
            const user = await User.findOne({where: {email}})
            if (!user) {
                return next(ApiError.internal('Пользьзователь не зарегестрирован'))
            }

            // console.log("user.user_roles in check", user.user_roles)


            const token = generateJwt(req.user.id, req.user.email, user.user_roles)
            return res.json({token})
            // const {id} = req.query
            // if (!id) {
            //     return next(ApiError.badRequest('Не задан ID '))
            // }
            // res.json(id);
        } catch (e) {
        }
    }
    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async getUsers(req, res) {
        try {
          const users = await User.findAll()
          res.json(users)
            // const user = await Role.create({ id: 0, name: "USER" })
            // const admin = await Role.create({ id: 1, name: "ADMIN" })

            // res.json("ok");
        } catch (e) {
            console.log(e)
        }
    }

    async get_user(req, res) {
        try {
          const email = req.body.email
        //   console.log('in get_user', email)
        //   console.log('req', req)
          const user = await User.findOne({where: {email}})
          res.json(user)
        } catch (e) {
            console.log('in get_user', e)
        }
    }
}

module.exports = new UserController()