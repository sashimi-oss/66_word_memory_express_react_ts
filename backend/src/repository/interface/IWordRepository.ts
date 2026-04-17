export interface IWordRepository {
    getWordList(): Promise<any>;
    getWord(): Promise<any>;
}