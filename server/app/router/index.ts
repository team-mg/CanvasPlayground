import {Router, Request, Response, NextFunction} from 'express';
import path from 'path';

export default class Index{
    public router: Router;
    constructor(){
        this.router = Router();
        this._defRoutes();
    }
    _defRoutes(){
        this.router.get('/', this._render);
        this.router.get('/index', this._render);
    }

    _render(req: Request, res: Response, next: NextFunction){
        res.render('index');
    }
}

