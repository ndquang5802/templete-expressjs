import { NextFunction, Request, Response } from "express";
import appService from "../services/app.service";

class AppController {
  private appService;

  constructor() {
    this.appService = appService;
  }

  hello = (req: Request, res: Response, next: NextFunction) => {
    return this.appService.getHello();
  };
}

export default new AppController();
