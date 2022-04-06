let express = require("express");
let router = express.Router();
let user = require("../models/userSchema");



router.get("/", (req, res) => {
    res.render("users", { list: ["lovekush", "upendra", "arya", "stark"] });
});

router.get('/:id', (req, res) => {
    res.render('singleUser', { user: { userName: "lovekush123", name: 'lovekush', email: "lovekush@gmail.com" } })
})

router.get("/new", (req, res) => {
    res.render("userForm");
});

router.post("/", (req, res) => {
    user.create(req.body, (err, data) => {
        if (err) return console.log(err);
        res.send(data);
    });
});

router.put("/edit/:id", (req, res) => {
    user.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, data) => {
            if (err) return console.log(err);
            res.json(data);
        }
    );
});

router.delete("/delete/:id", (req, res) => {
    user.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(`${data.name} is deleted`)
    })
});

module.exports = router;
