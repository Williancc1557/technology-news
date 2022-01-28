import cheerio from "cheerio";
import type { IWebScrapingProvider } from "../../IWebScrapingProvider";
import axios from "axios";
import { pinoConfig } from "../../../log/logger";

import { getAllHrefNewsFunction, getAllNewsFunction } from "./CheerioAllNewsFunctionsProvider";

export class CheerioProvider implements IWebScrapingProvider {

    public constructor(
        private readonly urlWebSite: string,
    ) { }


    public async getTechnologyNews(): Promise<object> {
        pinoConfig.debug("get first href new executed");

        const { data } = await axios.get(this.urlWebSite);

        const $ = cheerio.load(data);

        const linkNews = { href: "" };

        const firstNewUrl = 0;
    }
}