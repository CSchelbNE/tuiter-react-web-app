import express from "express";
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
HelloController(app)
UserController(app)
TuitsController(app)
// Some process was already listening on my loopback at 4000, so I moved the port listening to 2000.
app.listen(process.env.PORT || 2000)