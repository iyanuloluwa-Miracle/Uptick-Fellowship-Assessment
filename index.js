const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5009;

require("dotenv").config();
// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

const routes = require("./server/routes/users.js");

app.use("/", routes);

app.listen(port, () => console.log(`listening to port ${port}`));
