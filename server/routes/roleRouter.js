const Router = require('express')
const router = new Router()
const roleController = require('../controllers/roleController')
const checkRole = require('../middleware/checkRoleMiddleware')

// чтобы проверялась роль при создании нового объекта необходимо вторым параметром добавить checkRole('ADMIN')
router.post('/', checkRole('ADMIN'), roleController.create)

// router.post('/', roleController.create)
router.get('/', roleController.getAll)

module.exports = router