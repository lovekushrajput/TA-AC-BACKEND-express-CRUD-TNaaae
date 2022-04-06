let express = require('express')

let app = express()

//middlwares
app.use(express.urlencoded({ extends: true }))
app.use('/', require("./routes/index.js"))
app.use('/students', require("./routes/student.js"))

// view engine setup
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

// error middlewares
app.use((req, res, next) => {
    res.statusCode = 404
    res.send('Page Not Found')
})

//listner
app.listen(4000, () => {
    console.log('server is listening on port 4k')
})