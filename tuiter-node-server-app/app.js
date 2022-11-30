import express from "express";
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors"
import mongoose from "mongoose";

// const DB_CONNECTION_STR = process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/tuiter"
// console.log(DB_CONNECTION_STR)

const DB_CONNECTION_STR=  "mongodb+srv://cschelb:F1shg0d132435!@cluster0.cqrbput.mongodb.net/?retryWrites=true&w=majority"

const app = express()
mongoose.connect(DB_CONNECTION_STR);
app.use(express.json())
app.use(cors())
HelloController(app)
UserController(app)
TuitsController(app)
// Some process was already listening on my loopback at 4000, so I moved the port listening to 2000.
app.listen(process.env.PORT || 2000)