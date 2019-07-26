import mongodb, { Collection, MongoClient } from 'mongodb'

const mongoClient = mongodb.MongoClient
const url = 'mongodb+srv://team-mg:mg-team@cluster0-bftuh.mongodb.net/test?retryWrites=true'
const dbName = 'mg-canvasplayground'

export default function connectDatabase():Promise<mongodb.Db> {
    return new Promise<mongodb.Db>((resolve, reject) => {
        mongoClient.connect(url, { useNewUrlParser: true}, (err, client) => {
            const db:mongodb.Db = client.db(dbName);
            resolve(db);
        });
    });
}