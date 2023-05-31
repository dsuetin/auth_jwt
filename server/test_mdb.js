var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://suetindaniil:Proton938uud@ac-g8n80dc-shard-00-00.a6o8kqc.mongodb.net:27017,ac-g8n80dc-shard-00-01.a6o8kqc.mongodb.net:27017,ac-g8n80dc-shard-00-02.a6o8kqc.mongodb.net:27017/?ssl=true&replicaSet=atlas-2o2jdr-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('collection', collection);
  client.close();
});