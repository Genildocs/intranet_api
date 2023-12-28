const config = require("./utils/config");
const express = require("express");
const postRoutes = require("./routes/postRoutes");
const logger = require("./utils/logger");
const admin = require("firebase-admin");
const app = express();
app.use(express.json());

logger.info("connecting to", config.FIREBASE_URL);

app.use(express.json());
app.use("/api/v1/posts", postRoutes);

module.exports = app;
