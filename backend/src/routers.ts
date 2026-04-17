import type { Request, Response } from "express";
import express from "express";
import { Practice } from "./controller/Practice";
import { GetWordList } from "./controller/GetWordList";
import { Container } from "inversify";
import { IController } from "./controller/interface/IController";
import { WordController } from "./controller/WordController";
import { UserController } from "./controller/UserController";
import { WordService } from "./service/WordService";
import { WordRepository } from "./repository/WordRepository";
import { IWordRepository } from "./repository/interface/IWordRepository";

const praRouter = express.Router();

const practice = new Practice("hello practice");
const getWordList = new GetWordList();

praRouter.get('/', (req: Request, res: Response) => {
    res.send("Hello World!");
})

praRouter.get('/router-success', (req: Request, res: Response) => {
    res.send("routing success!!!!!!");
})
// praRouter.get(practice.urlBase, (req: Request, res: Response) => {
//     res.send(practice.getInitValue());
// })
praRouter.get(practice.urlBase, (req: Request, res: Response) => {
    practice.getConnectValue(req, res);
})
praRouter.get(getWordList.urlBase, (req: Request, res: Response) => {
    getWordList.getWordList(req, res);
})

const container: Container = new Container();

container.bind<IController>('WordController').to(WordController);
container.bind<IController>('UserController').to(UserController);
container.bind<WordService>('WordService').to(WordService).inSingletonScope();
container.bind<IWordRepository>('IWordRepository').to(WordRepository).inSingletonScope();
const wordController = container.get<IController>('WordController');
const userController = container.get<IController>('UserController');

// praRouter.get(wordController.handler().url, wordController.handler().functionName)
[
    wordController,
    userController
].forEach(controller => {
    controller.registerRoutes(praRouter);
})


export default praRouter;


