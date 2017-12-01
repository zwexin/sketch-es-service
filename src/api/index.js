// @flow

import jwt from "express-jwt";
import { Router } from "express";

import { JWT_PUBLIC_KEY } from "../config";
import post from "./post";

/**
 * JWT
 */
const jwtMiddleware = jwt({ secret: JWT_PUBLIC_KEY });

/**
 * export
 */
export default function() {
  const api = Router();

  api.use("/posts", jwtMiddleware, post);

  /**
   * api health check
   */
  api.get("/health", (req, res) => {
    res.json({
      healthy: "good"
    });
  });

  return api;
}
