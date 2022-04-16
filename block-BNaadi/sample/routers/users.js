let express = require('express')
let router = express.Router()
let User = require('../models/User')


router.get('/',(req,res,next)=>{
    // list of all users
    User.find({}, (err,users)=>{
        if(err) return next(err)
        res.render('listUsers.ejs', {users: users})
    })
})


router.post('/',(req,res,next)=>{
    //save data to data base
   User.create(req.body , (err,user)=>{
   if(err) return next(err)
   res.redirect('/users')
   })
})

//single user
router.get('/:id',(req,res,next)=>{
    // grab the ID
    let id =req.params.id
    User.findById( id , (err,user)=>{
        if(err) return next(err)
        res.render('singleUser.ejs', {user})
    })
})

// update user deatils
router.put('/:id', (req,res,next)=>{
    let id = req.params.id
    User.findByIdAndUpdate( id , req.body , (err,user)=>{
        if(err) return next(err)
       res.redirect('/users')
    })
})

// delete user
router.delete('/:id', (req,res,next)=>{
    let id = req.params.id
    User.findByIdAndDelete(id ,(err , user)=>{
        if(err) return next(err)
        res.send(`${user.name} deleted successfully`)
    })
})

module.exports = router