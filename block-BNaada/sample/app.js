let express = require('express')
let mongoose = require("mongoose")
let router = require("./routes/user")
//mongoose connect
mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log( "connected" , err ? false : true  )
})

let app = express()

//middlewares
app.use(express.urlencoded( {extended : true} ))


// view setup engine
app.set('view-engine','ejs')
app.set("views",__dirname + "/views")

app.use("/users",router)




//404 error
app.use((req,res)=>{
    res.send('404 Page Not Found')
})


// custom error handler
app.use((err,req,res)=>{
    res.send(err)
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})