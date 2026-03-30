"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWordList = void 0;
const db_1 = require("../db");
class GetWordList {
    constructor() {
        this.urlBase = '/word-list';
    }
    async getWordList(req, res) {
        const result = await db_1.pool.query("select * from famous_word");
        res.json(result);
    }
}
exports.GetWordList = GetWordList;
