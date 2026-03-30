import type { Request, Response } from "express";
import { pool } from "../db";


export class GetWordList {
  public urlBase = '/word-list'

  constructor(

  ) {

  }

  public async getWordList(req: Request, res: Response): Promise<void> {
    const result = await pool.query("select * from famous_word");
    res.json(result);
  }

//   public async getConnectValue(req: Request, res: Response) {
//     const result = await pool.query("select * from famous_word");
//     res.json(result);
//   }

  // public getRequest(req: Request, res: Response) {
  //     const requestData = req.query;
  //     res.send(requestData);
  // }
}
