"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Practice = void 0;
const db_1 = require("../db");
class Practice {
    constructor(initValue) {
        this.urlBase = '/practice';
        this.initValue = initValue;
    }
    getInitValue() {
        return this.initValue;
    }
    async getConnectValue(req, res) {
        const result = await db_1.pool.query("select * from famous_word");
        res.json(result);
    }
}
exports.Practice = Practice;
