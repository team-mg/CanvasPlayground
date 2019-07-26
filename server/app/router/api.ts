import {Router, Request, Response, NextFunction} from 'express';
import path from 'path';

import mongodb, { Collection } from 'mongodb'

export default class Index{
    public router: Router;
    private db: mongodb.Db;

    constructor(db:mongodb.Db){
        this.db = db;
        this.router = Router();
        this._defRoutes();

        // const collection = db.collection('user')
        // collection.find({}).toArray((err, result) => {
        //     console.log(result)
        // })
    }
    _defRoutes(){
        this.router.get('/', this._render);
        this.router.get('/index', this._render);
    }

    _render(req: Request, res: Response, next: NextFunction){
        res.render('index');
    }
}

