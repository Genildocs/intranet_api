const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config( {path: './.env'} );


mongoose.set('strictQuery', false)

const DB = process.env.MONGODB_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(con => {
  console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(err => {
  console.log("Erro ao conectar com o banco de dados: " + err);
});


const app = require("./app");
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`);
});
