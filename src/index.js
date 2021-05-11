const express = require("express");
const connectDB = require("./db/setup");
const app = express();
const route = require("./routes/routes");
require("dotenv").config({ path: "./src/.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect MongoDB
connectDB();

app.use(route);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
