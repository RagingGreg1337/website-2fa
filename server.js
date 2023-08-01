const http = require("http");
const port = 80 
const hostname = "0.0.0.0";


const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
        res.render("index")
})



const faRouter = require("./routes/2fa")

app.use("/2fa", faRouter)

const loginRouter = require("./routes/register")

app.use("/register", loginRouter)

app.listen(port, hostname, () => {
        console.log('Server Running at http://${hostname}:${port}/');
});