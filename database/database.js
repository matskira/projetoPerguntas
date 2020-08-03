//Cria uma instância do meu Sequelize
const sequelize = require("sequelize");

//Crio a conexão, nome do banco, usuario, senha, {host, dialeto}
const connection = new sequelize('projeto_perguntas', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

//exporto minha conexão
module.exports = connection; 
