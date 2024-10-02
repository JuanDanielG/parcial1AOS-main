import express from "express";
import { env } from "./default.js"
import route from "../routers/index.route.js";
import pgConnection from "../service/pgConnection.service.js";
import middleware from "../middlewares/index.middlewares.js";

export default class Server {

    constructor(){
        this.app = express()
        this.port = env.port
    }

   async connectionDB() {
    new pgConnection();
    }

    middlewares(){
        this.app.use(express.json())
        // Activo el uso de middleware personalizado 
        this.app.use(middleware)
    }

    route(){
        this.app.use(route)

    }

    runServer(){
        this.connectionDB(),
        this.middlewares(),
        this.route(),
        this.app.listen(this.port , () => {
            console.log('Running on port ', 8000);
        })
        
    }

}