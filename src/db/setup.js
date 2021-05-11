const mongoose = require("mongoose");
require("dotenv").config({ path: "./src/.env" });

const { MONGO_URI } = process.env;

const connectDB = () => {
  mongoose.connect(
    MONGO_URI,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log(err);
      else console.log("Database connected successfully");
    }
  );
};

module.exports = connectDB;
