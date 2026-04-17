import { injectable, inject } from "inversify";
// import { WordRepository } from "../repository/WordRepository";
import { IWordRepository } from "../repository/interface/IWordRepository";

@injectable()
export class WordService {
    public constructor(
        @inject('IWordRepository')
        public readonly wordRepository: IWordRepository,
    ) {
    }

    public async getWordList(): Promise<Array<any>> {
        const wordList = await this.wordRepository.getWordList();
        return wordList;
    }

    public async getWord(): Promise<any> {
        const word = await this.wordRepository.getWord();
        return word;
    }
}