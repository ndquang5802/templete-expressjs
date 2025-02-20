import { NextFunction, Request, Response } from "express";

export function asyncInterceptor(handler: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await handler(req, res, next);
      res.status(200).json({
        success: true,
        data: response,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("🚀 ~ return ~ error:", error);
      next(error);
    }
  };
}
