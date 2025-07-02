const express = require("express"); // Importa o módulo Express
const app = express(); // Cria uma instância do Express

app.use(
  express.urlencoded({
    // Middleware para interpretar dados de formulários em HTML
    extended: true, // Permite objetos no corpo da requisição
  })
);

app.use(express.json()); // Middleware para ler JSON no corpo das requisições

app.post('/createproduct', (req, res) => {
  const name = req.body.name
  const price = req.body.price 

  console.log(name)
  console.log(price)

  res.json({message: `O produto ${name} foi criado com sucesso!`})
})

app.get("/", (req, res) => {
  // Define uma rota GET na raiz ('/')
  res.json({ message: "Primeira rota criada com sucesso!" }); // Envia uma resposta JSON
});

app.listen(3000); // Inicia o servidor na porta 3000
