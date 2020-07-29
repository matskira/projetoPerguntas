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
    
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador!",
        inscritos: 8000,
        msg: exibirMsg
    });
});

app.listen(8080, ()=>{
    console.log("APP rodando!")
});