import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "reflect-metadata";
// @ts-ignore
import * as http from "http";


import routes from "./routers";

// Create Express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Add app routes.
routes(app);

//Create http server with express
const httpServer = http.createServer(app);

// Start Express server
httpServer.listen(5500, () => {
  console.log("  App is running at http://localhost:%d in %s mode", 5500, app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});
