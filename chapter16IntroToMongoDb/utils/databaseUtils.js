const mongo= require('mongodb');
const mongoClient= mongo.MongoClient;
const MONGO_URL=  "mongodb+srv://jigmet:root@jigmet.ajgzrcz.mongodb.net/?retryWrites=true&w=majority&appName=jigmet";


let _db;
const mongoConnect= (callback)=>{
mongoClient.connect(MONGO_URL).then(client=>{
  callback();
   _db = client.db('airbnb');

 
}).catch(err=>{
console.log("error while connecting to mongodb", err);
})
}

const getDB=()=>{
  if(!_db){
    throw new Error('Mongo no connected');
}

  return _db;


}

exports.mongoConnect= mongoConnect;
exports.getDB= getDB;
