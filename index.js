//Importando o express
const express = require("express");
const app = express();


//Estou dizendo para o express, usar o EJS como View Engine
app.set('view engine', 'ejs');


app.get("/:nome/:lang", (req,res) =>{
    //render por padrão, olha sempre a pasta views (Por isso precisamos colocar os nossos HTML nessa pasta)
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;
    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 1.45},
        {nome:"Leite", preco: 1.10},
        {nome:"Maçã", preco: 1.00},
        {nome:"Monster", preco: 7.50}
    ]


    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador!",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080, ()=>{
    console.log("APP rodando!")
});