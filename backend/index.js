const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require('body-parser');
const userRoute = require("./routes/userRoutes.js")
const connectDB = require("./dataBase.js")

require('dotenv').config()


const app = express();


app.use(cors()) ;
app.use(express.json())
app.use(bodyParser.json());

// Data base connection
connectDB();

app.use("/" , userRoute)

app.listen(process.env.PORT,()=>{

    console.log( `server is connected ${process.env.PORT} ` )
})
