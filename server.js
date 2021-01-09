const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
   res.send("API is running.")
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});