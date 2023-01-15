const Router = require('express')
const router = new Router()

const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const bikeClassRouter = require('./bikeClassRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/bike_class', bikeClassRouter)

module.exports = router