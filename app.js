const express = require("express");
const postRoutes = require("./routes/postRoutes");
const app = express();

app.use(express.json());
app.use("/api/v1/posts", postRoutes);

module.exports = app;
