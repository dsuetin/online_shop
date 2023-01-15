const Router = require('express')
const router = new Router()
const userController = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
// router.get('/auth', userController.check)
router.get('/auth', authMiddleware, userController.check)
// router.get('/auth', (req, res)=>{
//     res.json({message: 'All WORKING'})
// })

module.exports = router