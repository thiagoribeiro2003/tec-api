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

// Inserindo alunos
function inserir(aluno, res){
    // ? É um caractere coringa
    const sql = "INSERT INTO alunos SET ?"; /* o trecho "SET ?" estão vindo do MYSQL2
     e a ? recebe os dados e atribui na ordem. Proteção contra Injection e Tratamento de Strings vindo do MYSQL2*/

     conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code); // 400 - requisição inválida e informa o códido de erro
        } else {
            res.status(201).json({ "status": "Aluno Inserido!"}); // 201 - Criado e apresenta a mensagem "Aluno Inserido!"
        }
     })
}

// Função que exibe Um aluno
function lerUm(id, res){
    const sql = "SELECT * FROM alunos WHERE id = ?";

    conexao.query(sql, id, (erro, resultados) => {

        // Checando se existe conteúdo
        if(resultados.length === 0){
            res.status(204).end();
            return;
        }

        // if erro ou resultado
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]);
        }
    });
}

// ATUALIZAR aluno
// Essa função vai receber um id, os dados aluno, e res.

function atualizar(id, aluno, res){
    const sql = "UPDATE alunos SET ? WHERE id = ?";

    // Para passar mais um parâmetro usamos o array.
    // Aqui a ordem importa (pois tem q ser igual a do comando sql)
    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            // res.status(200).json({"status" : "Atualizado xom sucesso!"});

            // spread opeator (Operador de "espalhamento" de objetos)
            res.status(200).json( {...aluno, id} );
        }
    });
}



export { ler, inserir, lerUm, atualizar };


