const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

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

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Campo necessario!"],
    minLength: 5,
    unique: true,
  },
  text: {
    type: String,
    required: [true, "Campo necessario!"],
  },
});
const Post = mongoose.model("Post", postSchema);

const testePost = new Post({
  title: "Como ver as solicitações para seguir enviadas no Instagram",
  text: "Solicitações para seguir enviadas no Instagram podem ser encontradas no arquivo de backup da rede social; não é possível ver as solicitações pendentes pelo aplicativo ou versão web",
});

testePost
  .save()
  .then((doc) => {
    console.log(doc);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Erro no banco de dados: " + err);
  });

const app = require("./app");
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`);
});
