import 'source-map-support/register';

import App from './app';
import * as express from 'express';

import connectDatabase from './db';

connectDatabase()
.then((db) => {
    const port: number = Number(process.env.PORT) || 3000;
    const app: express.Application = new App(db).app;
    
    app.listen(port, () => console.log(`Express server listening at ${port}`))
    .on('error', err => console.error(err));
});