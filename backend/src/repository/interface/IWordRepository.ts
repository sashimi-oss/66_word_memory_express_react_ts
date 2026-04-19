export interface IWordRepository {
    getWordList(): Promise<Array<any>>;
    getWord(): Promise<any>;
}