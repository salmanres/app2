"Access-Control-Allow-Origin"
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./database/connection");
const port = process.env.PORT || 3400;
const appRoute = require("./routes/appRoutes");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(appRoute);
app.use(express.json);


app.listen(port, () => {
    console.log(`app is listening @ port ${port}`);
})