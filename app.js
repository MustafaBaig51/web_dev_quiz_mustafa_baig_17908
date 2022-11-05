// Mustafa Baig
// ERP: 17908

require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors");

const BookRoute = require('./routes/Book.route');

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

// Main Routes
app.use('/books', BookRoute);

// Undefined Routes
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;