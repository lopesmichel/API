const express = require("express"); // Importa o módulo Express
const app = express(); // Cria uma instância do Express

app.use(
  express.urlencoded({
    // Middleware para interpretar dados de formulários em HTML
    extended: true, // Permite objetos no corpo da requisição
  })
);

app.use(express.json()); // Middleware para ler JSON no corpo das requisições

// Cria uma rota POST chamada '/createproduct'
app.post('/createproduct', (req, res) => {

  // Pega o valor do campo 'name' que foi enviado no corpo da requisição
  const name = req.body.name
  // Pega o valor do campo 'price' que foi enviado no corpo da requisição
  const price = req.body.price 

 
  console.log(name)
  console.log(price)

  // Se o campo 'name' não foi enviado, retorna erro 422 com uma mensagem
  if (!name) {
    res.status(422).json({ message: 'O campo nome é obrigatório!'})
    return 
  }

  // Se passou na validação, retorna status 201 (criado) com mensagem de sucesso
  res.status(201).json({message: `O produto ${name} foi criado com sucesso!`})
})


app.get("/", (req, res) => {
  // Define uma rota GET na raiz ('/')
  res.status(200).json({ message: "Primeira rota criada com sucesso!" }); // Envia uma resposta JSON
});

app.listen(3000); // Inicia o servidor na porta 3000
