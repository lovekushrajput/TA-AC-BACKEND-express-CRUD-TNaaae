let express = require('express')
let User = require("../models/User")
let router = express.Router()

router.get('/', (req, res, next) => {
    // list of all users
    User.find({}, (err, userList) => {
        if (err) return next(err)
        res.render('users.ejs', { userList: userList })
    })
})

router.get('/new', (req, res) => {
    // render the from
    res.render('form.ejs')
})

router.post('/', (req, res, next) => {
    // capture the data
    // save data to database
    User.create(req.body, (err, user) => {
        if (err) return next(err)
        res.send(user)
    })
})

router.get('/:id', (req, res, next) => {
    // find single user using id
    let id = req.params.id
    User.findById(id, (err, user) => {
        if (err) return next(err)
        res.render('singleUser.ejs',{user: user})
    })
})

// update
router.get('/:userId/edit',(req,res,next)=>{
    // render the form of specific id
    let id = req.params.userId
    User.findById(id,(err,user)=>{
        if (err) return next(err)
        res.render("editUser.ejs", { user: user })
    })
})


router.post('/:userId', (req,res,next)=>{
    // post and update the data
    let id = req.params.userId
    User.findByIdAndUpdate(id, req.body , (err,updatedUser)=>{
        if (err) return next(err)
        res.redirect('/users/'+ id)
    })
})

module.exports = router