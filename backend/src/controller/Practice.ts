// import express from "express";
import type { Request, Response } from "express";
import { pool } from "../db";

export class Practice {
    public urlBase = '/practice'
    private readonly initValue;

    constructor(
        initValue: string
    ) {
        this.initValue = initValue;
    }

    public getInitValue(): string {
        return this.initValue;
    }

    public async getConnectValue(req: Request, res: Response) {
        const result = await pool.query("select * from famous_word");
        res.json(result);
    }

    // public getRequest(req: Request, res: Response) {
    //     const requestData = req.query;
    //     res.send(requestData);
    // }

}