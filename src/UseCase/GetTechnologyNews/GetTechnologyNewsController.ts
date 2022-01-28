import type { Request, Response } from "express";
import { pinoConfig } from "../../log/logger";
import type { GetTechnologyNewsUseCase } from "./GetTechnologyNewsUseCase";

export class GetTechnologyNewsController {
    public constructor(
        private readonly getTechnologyNewsUseCase: GetTechnologyNewsUseCase
    ) { }

    public async handle(req: Request, res: Response) {
        pinoConfig.debug("Handle controller was executed in GetTechnologyNews");
        try {
            let requestsNumber = Number(req.header("requestsNumber"));

            if (isNaN(requestsNumber)) requestsNumber = undefined;

            const responseRequest = await this.getTechnologyNewsUseCase.execute({ requestsNumber });

            pinoConfig.debug("The const responseRequest was sended");
            return res.json(responseRequest);
        } catch (err) {
            pinoConfig.debug("The router returned error");
            const errorMessage = err.message || "unknown error";
            const errorCode = 400;
            return res.status(errorCode).json(errorMessage);
        }
    }
}