import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const url = 'mongodb+srv://team-mg:mg-team@cluster0-bftuh.mongodb.net/test?retryWrites=true'
const dbName = 'mg-canvasplayground'

export default function connectDatabase(complete:()=>{}) {
    MongoClient.connect(url, { useNewUrlParser: true}, (err, client) => {
        console.log('Connected successfully to mongodb server')

        const db = client.db(dbName)
        const collection = db.collection('todolist')

        complete();
    });
}