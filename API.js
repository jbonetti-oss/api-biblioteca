// Importando dependências
const express = require("express");
const cors = require("cors");

// Criando aplicação
const app = express();

// Usando CORS
app.use(cors());

// Definindo porta
const PORT = 3000;

// Rota GET simples
app.get("/", (req, res) => {
  res.json({
    mensagem: "Bem-vindo à minha API "
  });
});

// Subindo servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});