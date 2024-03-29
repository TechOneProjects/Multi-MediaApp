const { MongoClient, ServerApiVersion } = require('mongodb');
const credentials = './X509-cert-417823235823615851.pem'

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
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  console.log('MongoDB configuration successful!')
}

connectClient().catch(console.dir);