// @flow

import dotenv from "dotenv";

/**
 * init dotenv
 * priority: environment -> .env
 *
 * Available settings
 *
 * PORT=9527
 * BASE_PATH=/v1
 * JWT_PUBLIC_KEY=`a public key string`
 */

dotenv.config();

function safeEnv(name: string, defaultValue, isCheck: boolean = false): any {
  const value = process.env[name];
  if (!value && isCheck) {
    throw new Error(`environment ${name} is required`);
  }
  return value || defaultValue;
}

const defaultPort = 9527;
const defaultBasePath = "/v1";

/**
 * exports
 */
export const PORT = safeEnv("PORT", defaultPort);
export const BASE_PATH = safeEnv("BASE_PATH", defaultBasePath);
export const JWT_PUBLIC_KEY = safeEnv("JWT_PUBLIC_KEY", "", true);
