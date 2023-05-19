import "dotenv/config";
import cors from "cors";
import express from "express";
import userRoutes from "../routes/user.routes.js";

export default class Server {
  constructor() {
    //Init express and port
    this.app = express();
    this.port = process.env.PORT;

    //Routes
    this.userRoute = "/api/users";

    //Middlewares
    this.middlewares();
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Parseo y lectura del body
    this.app.use(express.json());

    //Sirve el contenido de la carpeta public
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userRoute, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`👂 Server listening on port ${this.port}`);
    });
  }
}
