const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  country: String,
});

const Data = mongoose.model("data", dataSchema);

module.exports = Data;
