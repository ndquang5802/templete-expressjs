import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/http.exception";
import { HTTP_STATUS_CODE } from "../constant";
import { ENV } from "../config/env.config";

export const basicAuth = (req: Request, res: Response, next: NextFunction) => {
  // Get the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    throw new HttpException(
      "Authorization header is missing",
      HTTP_STATUS_CODE.UNAUTHORIZED
    );
  }

  // Decode Base64 credentials
  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "utf-8"
  );

  // Split into username and password
  const [username, password] = credentials.split(":");

  if (
    username !== ENV.BASIC_AUTH_USERNAME ||
    password !== ENV.BASIC_AUTH_PASSWORD
  ) {
    throw new HttpException(
      "Invalid credentials",
      HTTP_STATUS_CODE.UNAUTHORIZED
    );
  }

  next();
};
