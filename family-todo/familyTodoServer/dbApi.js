
var MongoClient = require('mongodb').MongoClient
, assert = require('assert');

// Connection URL
const  url = 'mongodb://localhost:27017/todo';
const  collectionTasks="Tasks"
const dbTodo="todo"
// Use connect method to connect to the Server
/*
MongoClient.connect(url, function(err, client) {

 client.db(dbTodo).collection(collectionTasks).find().toArray().then(function(db) {
  console.log(db) // Use this to debug
  callback(db);
})

  
client.close()
});
*/
var getData=function (key,value){
    MongoClient.connect(url, function(err, client) {
      
var querry="{"+key+":"+value+"}"
console.log(querry)
        client.db(dbTodo).collection(collectionTasks).find(querry).toArray().then(function(db) {
         
         return(db);
       })
         
       client.close()
       });
} 

var insert=function (key,value){
    MongoClient.connect(url, function(err, client) {
      
var querry="{"+key+":"+value+"}"
console.log(querry)
        client.db(dbTodo).collection(collectionTasks).insert(querry)
         
       client.close()
       });
} 


module.exports.getData = getData;  
