import { Router } from "express";
import { Request, Response } from "express";
import { IController } from "./interface/IController";

export class UserController implements IController{
    urlBase = "/user"

    registerRoutes(router: Router): void {
        router.get(`${this.urlBase}/get-user-list`, this.getUserList.bind(this));
    }

    public constructor(

    ) {

    }

    public getUserList(req: Request, res: Response): void {
        res.send("get user list");
    }
}