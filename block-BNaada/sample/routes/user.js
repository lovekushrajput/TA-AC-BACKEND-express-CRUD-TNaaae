let express = require('express')
let router = express.Router()
let User = require("../models/Users")


router.get('/new',(req,res)=>{
    res.render("form.ejs")
})

router.post('/',(req,res,next)=>{
  User.create(req.body,(err,user)=>{
      if(err) return next(err)
      res.send(user)
  })
})

router.get('/',(req,res,next)=>{
    User.find({},(err,userList)=>{
        if(err) return next(err)
        res.render("users.ejs", {userList: userList})
    })
})

router.get('/:id',(req,res,next)=>{
    
    let id = req.params.id
User.findById(id,(err,user)=>{
    if(err) return next(err)
    res.render("singleUser.ejs", {user: user})
})
})

module.exports = router
