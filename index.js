//Importando o express
const express = require("express");
const app = express();


//Estou dizendo para o express, usar o EJS como View Engine
app.set('view engine', 'ejs');
//Estou dizendo para o express, que a pasta public terá arquivos estáticos (CSS, imagens e etc)
app.use(express.static('public'));

app.get("/", (req,res) =>{
    //render por padrão, olha sempre a pasta views (Por isso precisamos colocar os nossos HTML nessa pasta)
    res.render("index");
});

app.listen(8080, ()=>{
    console.log("APP rodando!")
});