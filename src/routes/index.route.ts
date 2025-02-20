import { Express } from "express";
import appRouter from "./app.route";

function routes(app: Express) {
  app.use("/api/app", appRouter);
}

export default routes;
