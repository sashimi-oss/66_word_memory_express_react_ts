import type { Request, Response } from "express";
import express from "express";
import { Practice } from "./api/Practice";

const router = express.Router();

const practice = new Practice("hello practice");

router.get('/router-success', (req: Request, res: Response) => {
    res.send("routing success!!!!!!");
})
// router.get(practice.urlBase, (req: Request, res: Response) => {
//     res.send(practice.getInitValue());
// })
router.get(practice.urlBase, (req: Request, res: Response) => {
    practice.getConnectValue(req, res);
})

export default router;


