import type { Request, Response } from "express";
import { Router } from "express";
import { pinoConfig } from "../log/logger";
import { getTechnologyNewsController } from "../UseCase/GetTechnologyNews";

export const router = Router();

router.get("/", async (req: Request, res: Response): Promise<Response> => {
    pinoConfig.info("The router / was executed");
    return getTechnologyNewsController.handle(req, res);
});