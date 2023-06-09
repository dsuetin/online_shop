// require('dotenv').config()
// require('find-config')
require('dotenv').config({ path: require('find-config')('.env') })
const express = require('express')
const sequelize = require('./db')
const {callback} = require("pg/lib/native/query");
const models = require('./models/models')
const cors = require('cors')
const fileUploads = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')


const PORT = process.env.PORT || 5000
console.log(`Server started on port !!!!!!!!!!! ${PORT}`)
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
// app.get("/*", function(req, res) {
    // res.sendFile(path.join(__dirname, "index.html"));
// });
app.use(fileUploads({}))
app.use('/api', router)


// app.get('/', (req, res) => {
    // res.status(200).json({message: 'WORKING!!!'})
// })

// app.get('/*', function(req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"))
// })


app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start().then(r => console.log('kkk'))