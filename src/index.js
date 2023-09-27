const express = require("express");
const morgan = require("morgan");

const dotenv = require("dotenv");
const route = require("./routes/index");
const dbConect = require("./config/db");

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", route);

const PORT = process.env.PORT || 3000;
const DB_URL =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL_PROD
    : process.env.DB_URL_DEV;
const environment = process.env.NODE_ENV || "development";

dbConect();
app.listen(PORT, () => console.log("Ready server in PORT-> " + PORT));
