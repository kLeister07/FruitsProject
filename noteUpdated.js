const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
 
async function run() {
  try {
    await client.connect();
    console.log("Connected Successfully to server");
 
    const database = client.db('fruitsDB');
    const fruitsCollection = database.collection("fruits");
 
    const docs = [
      {
        name: "Lichi",
        score: 8,
        review: "Great Fruit",
      },
      {
        name: "Pineapple",
        score: 6,
        review: "Kind Sour",
      },
      {
        name: "Mango",
        score: 9,
        review: "Great Stuff!",
      },
    ]
 
    const options = { ordered: true };
    const result = await fruitsCollection.insertMany(docs, options);
 
 
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
 
  }
}
run().catch(console.dir);