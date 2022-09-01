import mysql from 'mysql2';

// Configurando a conexão
const conexao = mysql.createConnection({
    // Local
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'escola'

     // REMOTO
     host: 'ns350.hostgator.com.br',
     user: 'alvoea33_thiago',
     password: 'blaublau20570306',
     database: 'alvoea33_escthiago'
});



// Conectando ao banco de dados
// conexao.connect();

conexao.connect( erro => {
    if(erro){
        console.error(`Errou ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco conectado em:${conexao.config.host}`);
    }
});

export default conexao;

