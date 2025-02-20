import express from "express";
import { Request, Response } from "express";
import appController from "../controllers/app.controller";
import { asyncInterceptor } from "../utils/interceptor";
import { basicAuth } from "../middlewares/basic.middleware";

const router = express.Router();

router.get("/hello", basicAuth, asyncInterceptor(appController.hello));

export default router;
