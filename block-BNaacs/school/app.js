let express = require('express')
let path = require('path')

let app = express()

//middlwares
app.use((req,res,next)=>{
    res.locals.message = "Hello 👋"
    next()
})

// view engine setup
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// routes
app.get('/', (req, res) => {
    res.render("index", { sports: ["kho-kho", "cricket", "volleyball", "football"] })
})

// error middlewares
app.use((req, res, next) => {
    res.statusCode = 404
    res.send('Page Not Found')
})

app.listen(4000, () => {
    console.log('server is listening on port 4k')
})