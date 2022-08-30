import express from "express";
import { ler, inserir, lerUm, atualizar } from "./src/aluno.js";

const app = express();
const porta = 3000;

// Configurando suporte ao formato JSON
app.use(express.json());

// Configurando suporte a dados de input de formulários
app.use(express.urlencoded({extended : true}));


// ROTAS

// Raiz
// Rota (endpoint) para a raiz da API
app.get('/', (req, res)=> {
    res.send("Página inicial da aplicação");
});

// Rota (endpoint) para exibir todos os alunos
app.get('/alunos', (req, res)=> {
   // res.send("Exibindo TODOS os alunos");
   ler(res);
});

// Rota (endpoint) para exibir um único aluno
 app.get('/alunos/:id', (req, res)=> {
   //  res.send("Exibe os dados de UM aluno");
   const id = req.params.id; // params pega todos os parametros e depois pega oq interessa
   lerUm(id, res);
 });

// Rota (endpoint) para INSERIR aluno
 app.post('/alunos', (req, res)=> {
   //  res.send("INSERINDO aluno");

   // Capturando os dados a partir do corpo da requisição
   const novoAulo = req.body;

   // Executando a função inserir e passando os parâmetros novoAulo e res.
   inserir(novoAulo, res);
 });

// Rota para atualizar TODOS os dados do aluno
 app.put('/alunos/:id', (req, res)=> {
    res.send("ATUALIZANDO TODOS os dados de um aluno");
 });




//Rota (endpoint) para atualizar ALGUNS/TODOS os dados do aluno
app.patch('/alunos/:id', (req, res)=> {
   // res.send("ATUALIZA ALGUNS/todos os dados de um aluno");

      // Capturar id
      const id = parseInt(req.params.id);
      //dados do aluno
      const aluno = req.body;
      atualizar(id, aluno, res);


 });





// Rota (endpoint) para EXCLUIR aluno
 app.delete('/alunos/:id', (req, res)=> {
    res.send("EXCLUI aluno");
 });





// Configurando o servidor
app.listen(porta, ()=> {
    console.log("Servidor express rodando");
});