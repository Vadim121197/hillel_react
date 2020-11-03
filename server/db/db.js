const config = require("config");
const mongoose = require("mongoose");

const MONGO_URL = config.get("MONGO_URL");

const startMongoServer = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log("Server Error".error);
    process.exit(1);
  }
};

module.exports = startMongoServer;
