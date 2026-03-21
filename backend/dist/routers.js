"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Practice_1 = require("./api/Practice");
const router = express_1.default.Router();
const practice = new Practice_1.Practice("hello practice");
router.get('/router-success', (req, res) => {
    res.send("routing success!!!!!!");
});
// router.get(practice.urlBase, (req: Request, res: Response) => {
//     res.send(practice.getInitValue());
// })
router.get(practice.urlBase, (req, res) => {
    practice.getConnectValue(req, res);
});
exports.default = router;
