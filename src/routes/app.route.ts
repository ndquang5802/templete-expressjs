import express from "express";
import appController from "../controllers/app.controller";
import { transformInterceptor } from "../interceptors/transform.interceptor";
import { basicAuth } from "../middlewares/basic.middleware";

const router = express.Router();

router.get("/hello", basicAuth, transformInterceptor(appController.hello));

export default router;
