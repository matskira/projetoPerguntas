const Sequelize = require("sequelize")
const connection = require("./database")


//Criando uma tabela
const Pergunta = connection.define("pergunta",{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});
//O force serve para dizer que se tiver a tabela, ele não vai criar novamente
Pergunta.sync({force: false}).then(()=>{console.log('Tabela criada com sucesso!')})

