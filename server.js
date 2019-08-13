const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const path = require("path")
const PORT = process.env.PORT || 7000


app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/skate-app", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, 
() => console.log("Connected to the DB"))



app.use("/api", expressJwt({secret: process.env.SECRET})) // creates req.user
app.use("/auth", require("./routes/authRouter.js"))
app.use("/users", require("./routes/userRouter.js"))
app.use("/videos", require("./routes/videoRouter.js"))
app.use("/spots", require("./routes/spotRouter.js"))

app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))