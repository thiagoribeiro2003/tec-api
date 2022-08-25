import conexao from './banco.js' // Importei a conexao com o banco de dados, pegamos a configuração e a conexao com o banco de dados



// Função que lê a tabela de alunos do Banco de Dados
function ler(res) {

// Criando o CRUD 
const sql = "SELECT * FROM alunos ORDER BY nome";

// Conectando ao Banco de Dados
conexao.query(sql, (erro, resultados) => {
    if(resultados.length === 0){
        res.status(204).end(); // 204 = Sem conteúdo (Vazio) - O método .end() para qualquer comunicação
        return; // die()
    }

    if(erro){
        res.status(400).json(erro.code); // 400 = BAD REQUEST - requisição inválida.
    } else {
        res.status(200).json(resultados); // 200 = OK - Deu certo, exibir os resultados
    }
})

}

export { ler };


