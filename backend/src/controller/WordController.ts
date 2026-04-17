import type { Request, Response, Router } from "express";
import { Container, injectable, inject } from "inversify";
import { IController } from "./interface/IController";
import { WordService } from "../service/WordService";

@injectable()
export class WordController implements IController {

    urlBase = "/word"

    registerRoutes(router: Router): void {
        router.get(`${this.urlBase}/get-word-list`, this.getWordList.bind(this));
        router.get(`${this.urlBase}/get-word`, this.getWord.bind(this));
    }
    // handler() {
    //     let url = `${this.urlBase}/get-word-list`;
    //     let method = "get";
    //     let functionName = this.getWordList.bind(this);
    //     return {
    //         url,
    //         method,
    //         functionName
    //     }
    // }

    // private wordService = new WordService()

    public constructor(
        @inject('WordService')
        public readonly wordService: WordService,
    ) {

    }

    public async getWordList(req: Request, res: Response): Promise<void> {
        // res.send("get word list");
        const wordList = await this.wordService.getWordList();
        res.send(wordList);
    }
    
    public async getWord(req: Request, res: Response): Promise<void> {
        // res.send("get one word");
        const word = await this.wordService.getWord();
        res.send(word);
    }

}