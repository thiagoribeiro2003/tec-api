import express from "express";

const app = express();
const porta = 3000;


// ROTAS

// Rota (endpoint) para a raiz da API
app.get('/', (req, res)=> {
    res.send("É um dia lindo para aprender sobre APIs");
});

// Rota (endpoint) para exibir todos os alunos
app.get('/alunos', (req, res)=> {
    res.send("Exibindo TODOS os alunos");
});

// Rota (endpoint) para exibir um único aluno
 app.get('/alunos/:id', (req, res)=> {
    res.send("Exibe os dados de UM aluno");
 });

// Rota (endpoint) para INSERIR aluno
 app.post('/alunos', (req, res)=> {
    res.send("INSERINDO aluno");
 });

// Rota para atualizar TODOS os dados do aluno
 app.put('/alunos/:id', (req, res)=> {
    res.send("ATUALIZANDO TODOS os dados de um aluno");
 });

//Rota (endpoint) para atualizar ALGUNS/TODOS os dados do aluno
app.patch ('alunos/:id', (req, res)=> {
    res.send("ATUALIZA ALGUNS/todos os dados de um aluno")
 })

// Rota (endpoint) para EXCLUIR aluno
 app.delete('/alunos/:id', (req, res)=> {
    res.send("EXCLUI aluno");
 })

// Configurando o servidor
app.listen(porta, ()=> {
    console.log("Servidor express rodando");
});