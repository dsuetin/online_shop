const Router = require('express')
const router = new Router()
const userController = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')
const { check } = require("express-validator")
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/registration', [
        check('email', 'Email cant be empty').notEmpty(),
        check('password', 'Weeak password').isLength({min:4, max:10}),
    ], userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
// router.get('/users', authMiddleware, userController.getUsers)
router.get('/users', [authMiddleware, checkRole('ADMIN')], userController.getUsers)
router.post('/getuser',  userController.get_user)
// router.post('/user', [authMiddleware, checkRole('ADMIN')], userController.get_user)

// router.get('/auth', (req, res)=>{
//     res.json({message: 'All WORKING'})
// })

module.exports = router