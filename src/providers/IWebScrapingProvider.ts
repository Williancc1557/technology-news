export interface IWebScrapingProvider {
    getTechnologyNews: (requestNumber?: number) => Promise<object>;
}


export interface ITechnologyNewsResponse {
    title: string;
    paragraph: string;
}