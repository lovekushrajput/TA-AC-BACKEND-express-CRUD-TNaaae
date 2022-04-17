let express = require('express')
let mongoose = require('mongoose')

// mongoose connect
mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log('connected', err ? false : true)
})

let app = express()

//view setup
app.set('view-engine', 'ejs')
app.set('views', __dirname + '/views')

// middlewares
app.use(express.urlencoded( {extends: false} ))
app.use(express.static(__dirname + '/public'))

//routing middlewares
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

//404 error 
app.use((req,res) => {
res.send('404 Page Not Found')
})

// custom error
app.use((err,req,res,next)=>{
    res.send(err)
})

//listener
app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})