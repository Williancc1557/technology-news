import cheerio from "cheerio";
import type { ITechnologyNewsResponse, IWebScrapingProvider } from "../../IWebScrapingProvider";
import axios from "axios";
import { pinoConfig } from "../../../log/logger";

const requestNumberDefault = 1;

export class CheerioProvider implements IWebScrapingProvider {

    public constructor(
        private readonly urlWebSite: string,
    ) { }

    private async getFirstHrefTechnologyNews($: cheerio.Root): Promise<string> {
        pinoConfig.debug("The method for to get href from web site news");
        let href: string;

        $(".tec--list__item").find("figure").find("a").each((index: number, element: cheerio.Element) => {
            const firstNewHref = 0;

            if (index == firstNewHref) {
                href = $(element).attr("href");
                return false;
            }
        });

        return href;
    }


    private async getTechnologyNewsPage(href: string, requestNumber = requestNumberDefault): Promise<Array<ITechnologyNewsResponse>> {
        pinoConfig.debug("The method for to get news was executed");

        const { data } = await axios.get(href);

        const $ = cheerio.load(data);

        const technologyNews: Array<ITechnologyNewsResponse> = [];

        const nullNewLocation = 1;

        if (requestNumber > requestNumberDefault) throw new Error("Should pass until 7 requestsNumber");

        $(".tec--article__body-grid").find("p").each((index: number, element: cheerio.Element) => {
            if (index > nullNewLocation && index <= requestNumber + nullNewLocation) {
                const paragraphLocation = 2;
                const title = $(element).find("a").text();
                const paragraph = $(element).text().split(".")[paragraphLocation];
                if (title == "" || paragraph == "" || !title || !paragraph) return;

                technologyNews.push({ title, paragraph });
            }
        });

        return technologyNews;
    }



    public async getTechnologyNews(requestNumber?: number): Promise<object> {
        pinoConfig.debug("The method for to get new was executed");

        const { data } = await axios.get(this.urlWebSite);

        const $ = cheerio.load(data);

        const href = await this.getFirstHrefTechnologyNews($);

        const technologyNews = await this.getTechnologyNewsPage(href, requestNumber);

        return technologyNews;
    }
}