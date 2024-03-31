const {MongoClient, ServerApiVersion } = require('mongodb')
const express = require('express')

const credentials = './X509-cert-417823235823615851.pem'
const app = express();
const port = process.env.PORT || 4200;

//MongoDB API route
app.get('/api/connect-mongodb', async (req, res) => {
  try {
    const result = await connectClient(); // Call your MongoDB connection function
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error connecting to MongoDB' });
  }
});
app.listen(port, ()=> {
  console.log('Connected to Mongo...')
})

const client = new MongoClient('mongodb+srv://cluster0.hwe1mux.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=Cluster0', {
  tlsCertificateKeyFile: credentials,
  serverApi: ServerApiVersion.v1
});
 async function connectClient() {
  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log('Mongo Client Disconnected...')
  }
}
connectClient().catch(console.dir);
//mongodb://127.0.0.1:27017/myapp - use for mongoose implementation??