import type { IWebScrapingProvider } from "../../providers/IWebScrapingProvider";

export class GetTechnologyNewsUseCase {
    public constructor(
        private readonly webScraping: IWebScrapingProvider,
    ) { }
}