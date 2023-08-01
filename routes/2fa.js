const express = require('express')
const router = express.Router()


router.get("/", (reg, res) => {
        res.render("2fa")
})

module.exports = router