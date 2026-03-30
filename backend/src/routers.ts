import type { Request, Response } from "express";
import express from "express";
import { Practice } from "./controller/Practice";
import { GetWordList } from "./controller/GetWordList";

const router = express.Router();

const practice = new Practice("hello practice");
const getWordList = new GetWordList();

router.get('/router-success', (req: Request, res: Response) => {
    res.send("routing success!!!!!!");
})
// router.get(practice.urlBase, (req: Request, res: Response) => {
//     res.send(practice.getInitValue());
// })
router.get(practice.urlBase, (req: Request, res: Response) => {
    practice.getConnectValue(req, res);
})
router.get(getWordList.urlBase, (req: Request, res: Response) => {
    getWordList.getWordList(req, res);
})

export default router;


