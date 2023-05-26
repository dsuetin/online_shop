const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

// чтобы проверялась роль при создании нового объекта необходимо вторым параметром добавить checkRole('ADMIN')
router.post('/', checkRole('ADMIN'), typeController.create)

// router.post('/', typeController.create)
router.get('/', typeController.getAll)

module.exports = router