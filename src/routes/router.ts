import type { Request, Response } from "express";
import { Router } from "express";
import { pinoConfig } from "../log/logger";
import { getTechnologyNewsController } from "../UseCase/GetTechnologyNews";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
    pinoConfig.info("The router / was executed");
    await getTechnologyNewsController.handle(req, res);
});