let express = require('express')
let mongoose = require('mongoose')
let router = require('./routes/user')

// mongoose connect
mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : "connected to dbs")
})

let app = express()

//middleware
app.use(express.urlencoded({ extended: true }))
app.use('/users', router)



//view engine setup
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


//error handle middleware
app.use((req, res, next) => {
    res.status = 404
    res.send('404 Page Not Found')
})

// listner
app.listen(4000, () => {
    console.log('server is listening on port 4k')
})