export interface IWebScrapingProvider {
    getTechnologyNews: () => Promise<object>;
    getAllTechnologyNews: (requestNumber?: number) => Promise<object>;
}