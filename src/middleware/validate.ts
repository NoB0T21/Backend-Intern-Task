import { Request, Response, NextFunction } from "express";
import { z, ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log("Validation error:", error.message);
        return res.status(400).json({
          success: false,
          errors: error.message,
        });
      }
      return res.status(500).json({
        success: false,
        message: "Validation error",
      });
    }
  };