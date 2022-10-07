import * as core from "express-serve-static-core";
import express from "express";

// Routes
import translateRouter from "./translation";

const baseApi = express.Router();

export default function routes(app: core.Express) {
  baseApi.use("/translations", translateRouter);

  app.use("/api/v1", baseApi);
}
