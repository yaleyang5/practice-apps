require("dotenv").config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
const connection = mongoose.createConnection(`mongodb://localhost:27017/${process.env.DB_NAME}`);
// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  term: String,
  definition: String
});



// 3. Export the models
const Entry = connection.model('Entry', glossarySchema);
// 4. Import the models into any modules that need them
module.exports.Entry = Entry;
