const config = require("config");
const mongoose = require("mongoose");

const MONGO_URL = config.get("MONGO_URL");

const startMongoServer = async () => {
  try {
    return await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log("Error DD", error);
    return process.exit(1);
  }
};

module.exports = startMongoServer;
