const Router = require('express')
const router = new Router()

const bikeClassController = require('../controllers/bikeClassController')

router.post('/', bikeClassController.create)
router.get('/', bikeClassController.getAll)

module.exports = router