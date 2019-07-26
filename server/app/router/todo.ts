import {Router, Request, Response, NextFunction} from 'express';


export default class Todo{
    public router: Router;
    
    constructor(){
        this.router = Router();
        this._defRoutes();
    }

    private _defRoutes(){
        this.router.get('/', this._renderMain);
    }

    private _renderMain(req: Request, res: Response, next: NextFunction){
        res.render('todo');
    }
}