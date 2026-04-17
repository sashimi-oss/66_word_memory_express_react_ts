import { inject, injectable } from "inversify";
import { pool } from "../db";
import { IWordRepository } from "./interface/IWordRepository";

@injectable()
export class WordRepository implements IWordRepository {
    public constructor() {

    }

    public async getWordList(): Promise<Array<any>> {
        const result = await pool.query("select * from famous_word");
        const rows = result.rows;
        return rows;
    }

    public async getWord(): Promise<any> {
        const result = await pool.query("select * from famous_word limit 1"); 
        return result;
    }

}