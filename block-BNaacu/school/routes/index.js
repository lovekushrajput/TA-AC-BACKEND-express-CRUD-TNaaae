let express = require("express")
let router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to express')
})

module.exports = router