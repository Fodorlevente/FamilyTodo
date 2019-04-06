const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient
var anyad=[1,1,2]
console.log(typeof(anyad))

// TODO: create a single module from this
MongoClient.connect('mongodb://localhost:27017/todo', function (err, client) {
  if (err) throw err

  var db = client.db('todo')
  
    db.collection('Tasks').find().toArray(function (err, result) {
    if (err) throw err
    serverConnection(result);
  })
})

// console.log that your server is up and running
function serverConnection(jsonObj){
   
    app.listen(port, () => console.log(`Listening on port ${port}`));

    // create a GET route
    app.get('/express_backend', (req, res) => {
      res.send({ express : jsonObj[0]});
    });
}