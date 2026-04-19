import type { Router } from "express";
export interface IController {
    urlBase: string;
    registerRoutes(router: Router): void;
    // handler(): {
    //     url: string;
    //     method: string;
    //     functionName: (req: Request, res: Response) => void;
    // }
}