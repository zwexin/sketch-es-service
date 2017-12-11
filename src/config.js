// @flow

import dotenv from "dotenv";

/**
 * init dotenv
 * priority: environment -> .env
 *
 * Available settings
 *
 * APP_PORT=9527
 * APP_BASE_PATH=/v1
 * APP_JWT_PUBLIC_KEY=`a public key string`
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
const defaultJWTPublicKey =
  "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCNdgZPtvnjWnyCxWfIzCrNqFR7\nlOXKl6xag5AB+6j9RRR3ZQXMEKvl/1wjZcMuxb5rs+u5HuJaf4LXmYszhpqUuALj\nGAbSPZZ+awoTvAdyd93iMoK0mh+B+7xkxkQ8bApqQ0q7UYBMb4vyQ/tWX0ubg9wb\nYXzLj7IbGhnyVDLNcQIDAQAB\n-----END PUBLIC KEY-----";

/**
 * exports
 */
export const PORT = safeEnv("APP_PORT", defaultPort);
export const BASE_PATH = safeEnv("APP_BASE_PATH", defaultBasePath);
export const JWT_PUBLIC_KEY = safeEnv(
  "APP_JWT_PUBLIC_KEY",
  defaultJWTPublicKey
);
