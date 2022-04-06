let express = require("express")
let mongoose = require('mongoose')
let student = require('../models/studentsSchema')
let router = express.Router()


router.get("/new", (req, res) => {
    res.render('form')
})

router.post("/", (req, res) => {
    //grab the data
    console.log(req.body)
    // save the data to databse
    student.create(req.body,(err,student)=>{
        if (err) return console.log(err);
        //send the response  
        res.send(`${student.name} is created successfully`)
    })
})

router.get("/", (req, res) => {
    console.log(req.body)
    res.render("students.ejs", { list: ["ankit", "suraj", "prashant", "ravi"] });

    //list of students
      // - render the ejs
         //   res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] })    
})

// get single student details
router.get("/:id", (req, res) => {
    student.findById(req.params.id,(err,data)=>{
        if(err) return console.log(err)
        res.render("studentDetail", {data:data,
            student: { name: "rahul", email: "rahul@altcampus.io" },
          });
    })
 

})

module.exports = router