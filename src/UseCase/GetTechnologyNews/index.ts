import { CheerioProvider } from "../../providers/implements/CheerioProvider/CheerioProvider";
import { GetTechnologyNewsController } from "./GetTechnologyNewsController";
import { GetTechnologyNewsUseCase } from "./GetTechnologyNewsUseCase";

const cheerioProvider = new CheerioProvider("https://www.tecmundo.com.br/tecnologia");

const getTechnologyNewsUseCase = new GetTechnologyNewsUseCase(cheerioProvider);

export const getTechnologyNewsController = new GetTechnologyNewsController(getTechnologyNewsUseCase);
