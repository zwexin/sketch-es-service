// @flow

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import http from "http";
import humps from "express-humps";
import logger from "morgan";
import methodOverride from "method-override";
import path from "path";
import swagger from "express-swagger-fancy";

import api from "./api";
import { PORT, BASE_PATH } from "./config";
import status from "@southfarm/http-status";

/**
 * initialize app
 */
const app = express();
const server = http.createServer(app);

/**
 * log in dev
 */
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
} else {
  app.use(
    logger("tiny", {
      skip: (req, res) => res.statusCode < 400
    })
  );
}

/**
 * main
 */
app.use(cors({ exposedHeaders: ["Link"] })); // enable CORS - Cross Origin Resource Sharing
app.use(`${BASE_PATH}/docs`, swagger(path.join(__dirname, "../swagger.json")));
app.use(bodyParser.json({ limit: "100kb" }));
app.use(humps());
app.use(methodOverride());
app.use(helmet()); // secure apps by setting various HTTP headers
app.use(BASE_PATH, api());

/**
 * 404
 */
app.use((req, res, next) => {
  next(new status.NotFound("Resouce not found"));
});

/**
 * handleError
 */
app.use((err, req, res, next) => {
  let error = err;
  if (!(err instanceof status.ExtendableError)) {
    console.log(err);
    error = new status.InternalError(err.message || err);
  }

  if (process.env.NODE_ENV !== "development") {
    delete error.stack;
  }

  return res.status(error.statusCode).json(error);
});

/**
 * start app
 */
server.listen(PORT);
console.log(`Started on port ${PORT}`); // eslint-disable-line

export default app;
