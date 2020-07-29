//Importando o express
const express = require("express");
const app = express();


//Estou dizendo para o express, usar o EJS como View Engine
app.set('view engine', 'ejs');


app.get("/", (req,res) =>{
    //render por padrão, olha sempre a pasta views (Por isso precisamos colocar os nossos HTML nessa pasta)
    res.render("index");
});

app.get("/perfil", (req,res) =>{
    //render por padrão, olha sempre a pasta views (Por isso precisamos colocar os nossos HTML nessa pasta)
    res.render("principal/perfil");
});


app.listen(8080, ()=>{
    console.log("APP rodando!")
});