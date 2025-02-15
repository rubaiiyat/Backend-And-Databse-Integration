const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://abir:abir123@cluster0.cwr6j.mongodb.net/School?retryWrites=true&w=majority";

const client = new MongoClient(url, { useUnifiedTopology: true });

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("MongoDB is connected successfully");

    // Call insert function
    await insertData(client);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  } finally {
    // Close connection to prevent hanging
    await client.close();
  }
}

async function insertData(client) {
  try {
    const myDatabase = client.db("School");
    const myCollection = myDatabase.collection("studentList");

    const myData = {
      name: "Abir Rubaiyat",
      roll: "43",
      address: "Bogura",
      phone: "01785320110",
    };

    const result = await myCollection.insertOne(myData);
    console.log("Successfully Inserted:", result.insertedId);
  } catch (error) {
    console.error("Insertion failed:", error);
  }
}

// Run the function
run();
