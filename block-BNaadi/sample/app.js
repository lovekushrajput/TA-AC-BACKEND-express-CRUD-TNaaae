let express = require('express')
let mongoose = require("mongoose")
let indexRouter = require('./routers/index')
let userRouter = require('./routers/users')

// mongoose connect
mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log("connected", err ? false : true)
})

let app = express()

//view-setup
app.set('view-engine', 'ejs')
app.set('views', __dirname + '/views')

//middlewares
app.use(express.urlencoded( {extended: false}))
app.use(express.json())

// routing middlewares
app.use('/', indexRouter)
app.use('/users', userRouter)

 
//404 error handler
app.use((req,res)=>{
    res.send('404 Page Not Found')
})

// custom error handler
app.use((err,req,res,next)=>{
    res.send(err)
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})