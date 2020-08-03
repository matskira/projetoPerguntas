//Importações
const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/Pergunta")

//Database
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão realizada com sucesso!")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    });



//Estou dizendo para o express, usar o EJS como View Engine
app.set('view engine', 'ejs');

//Estou dizendo para o express, que a pasta public terá arquivos estáticos (CSS, imagens e etc)
app.use(express.static('public'));

//Vai permitir que a pessoa envie os dados do formulário, e o bodyParse vai traduzir esses dados em uma estrutura 
//  JavaScript para conseguirmos trabalhar com eles;
app.use(bodyParse.urlencoded({extended: false}));

//Ler dados recebidos em um formato JSon;
app.use(bodyParse.json()); 


//Ínicio das rotas
app.get("/", (req,res) =>{
    //render por padrão, olha sempre a pasta views (Por isso precisamos colocar os nossos HTML nessa pasta)
    res.render("index");
});

app.get("/perguntar", (req,res) =>{
    res.render("perguntar");
});

//Para receber dados de um formulário, usamos o 'POST'
app.post("/salvar-pergunta", (req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send('Formulário recebido com sucesso! Título recebido: '+titulo+" <br>Descrição: " + descricao );
});

app.listen(8080, ()=>{
    console.log("APP rodando!")
});