const express = require("express");
const morgan = require("morgan");
const postRouter = require("./routes/postRoutes");
const mongoose = require("mongoose");
const app = express();

// MONGODB CONNECTION

mongoose.set("strictQuery", false);

const DB = process.env.MONGODB_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then((con) => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((err) => {
    console.log("Erro ao conectar com o banco de dados: " + err);
  });

// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use("/api/v1/posts", postRouter);

module.exports = app;
