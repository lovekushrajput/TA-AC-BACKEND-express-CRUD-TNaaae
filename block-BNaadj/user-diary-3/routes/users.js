let express = require('express')
let router = express.Router()
let User = require('../models/User')

//list of users
router.get('/',(req,res,next)=>{
    User.find({}, (err,users)=>{
        if(err) return next(err)
        res.render('userDetails.ejs', {users: users})
    })
})

// render the form
router.get('/new',(req,res)=>{
   res.render('userForm.ejs')
})

//post the form
router.post('/',(req,res,next)=>{
    User.create(req.body, (err,user)=>{
        if(err) return next(err)
        res.redirect('/users')
    })
})

//single user
router.get('/:id',(req,res,next)=>{
    let id = req.params.id
    User.findById( id, (err, user)=>{
        if(err) return next(err)
        res.render('singleUser.ejs',{user})
    })
})


//update User
router.get('/:id/edit',(req,res,next)=>{
    let id = req.params.id
    User.findById(id, (err,updatedUser)=>{
        if(err) return next(err)
        res.render('editUser.ejs',{updatedUser: updatedUser})
    })
})


router.post('/:id',(req,res,next)=>{
    let id = req.params.id
    User.findByIdAndUpdate(id,req.body, (err,user)=>{
        if(err) return next(err)
        res.redirect('/users')
    })
})

// 
router.get('/:id/delete',(req,res,next)=>{
    let id = req.params.id
    User.findByIdAndDelete(id,(err,user)=>{
        if(err) return next(err)
        res.redirect('/users')
    })
})

module.exports = router