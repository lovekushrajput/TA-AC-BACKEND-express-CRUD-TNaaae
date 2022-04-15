let express = require('express')
let mongoose = require('mongoose')
let userRouter = require('./routes/user')
let indexRouter = require("./routes/index")

// mongoose connect
mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log("connected", err ? false : true)
})

let app = express()

// view engine setup
app.set('view-setup','ejs')
app.set('views', __dirname + '/views')

// form data
app.use(express.urlencoded( {extended :true} ))

// routing middlewares
app.use('/', indexRouter)
app.use('/users', userRouter)

// 404  error
app.use((req,res)=>{
    res.send('404 Page Not Found')
})

// custom error middleware
app.use((err,req,res,next)=>{
    res.send(err)
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})