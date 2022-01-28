import { pinoConfig } from "../../log/logger";
import type { IWebScrapingProvider } from "../../providers/IWebScrapingProvider";
import type { IGetTechnologyDTO } from "./GetTechnologyNewsDTO";

export class GetTechnologyNewsUseCase {
    public constructor(
        private readonly webScraping: IWebScrapingProvider,
    ) { }

    public async execute(data: IGetTechnologyDTO) {
        pinoConfig.debug("The method execute was executed in GetTechnologyNews paste");
        const request = await this.webScraping.getTechnologyNews(data.requestsNumber);
        return request;
    }
}