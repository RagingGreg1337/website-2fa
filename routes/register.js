const express = require('express')
const router = express.Router()


router.get("/", (reg, res) => {
        res.render("register")
})

module.exports = router