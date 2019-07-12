import {Request, Response, NextFunction, Router} from 'express';
import express from 'express';
import path from 'path';

export default class Notfound{
    public router: Router;
    constructor(){
        this.router = Router();
        this._defRoutes();
    }
    _defRoutes(){
        this.router.use((req: Request, res: Response, next: NextFunction) => {
            res.status(404).render('notfound', {path: req.path});
        });
    }
}