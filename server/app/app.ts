import express from 'express';
import compression from 'compression';
import cors from 'cors';

import mongodb from 'mongodb'

import Notfound from './router/notfound';
import Index from './router/index';
import Api from './router/api';

export default class App{
    public app: express.Application;
    private notfound: Notfound;
    private index: Index;
    private api: Api;

    constructor(db:mongodb.Db){
        this.app = express();
        this.notfound = new Notfound();
        this.index = new Index();
        this.api = new Api(db);
    }

    _setup() {
        this._setView();
        this._setEngine();
        this._setMiddleware();
        this._setRouter();
    }

    _setView(){
        this.app.set('views', __dirname + '/views');
        this.app.set('view engine', 'ejs');
    }

    _setEngine(){
        this.app.engine('html', require('ejs').renderFile);
    }

    _setMiddleware(){
        this.app.use(express.static(__dirname + '/public'));
        this.app.use(compression());
        this.app.use(cors());
    }

    _setRouter(){
        this.app.use(this.index.router);
        this.app.use(this.notfound.router);
    }
}