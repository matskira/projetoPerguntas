# Plataforma de Perguntas e Respostas
Projeto de uma aplicação Web de perguntas e respostas ao estilo Yahoo Respostas!

### Motivo da criação
   
  * Aprofundar conhecimentos com Express.JS;
  * Como usar Express com MySQL;
  * Como utilizar o NodeJS com HTML e CSS;
  * Como utilizar o Bootstrap.
  
### Tecnologias
   
  ![Express.js Logo](https://d2vs8yx90uvogk.cloudfront.net/2019/11/ExpressJS.png) 
  ##### Express.js
  * Framework utilizado para criação do Back-End;
  * Para utilizarmos melhor o NodeJS, usaremos junto o body-parser;
  
  
  
  
  ![MySQL Logo](https://lh3.googleusercontent.com/proxy/RlcmOWBHcMgJzalWhw6wgngkgNEv2CobGFFdjGJFIm3OKQdyMF6ppY7uzTGw_4D2Syw62aejWS_2cs31Ee0KCm7W6HidRISWkU9LTdz_2CfKmnDZ26TKGyLMEAE)
  ##### MySQL
  * Banco de Dados utilizado.
  
  
  
  
  ![EJS Logo](https://glatchdesign.com/wp-content/uploads/2016/04/eyecatch_160417.gif)
  ##### EJS (Embedded JavaScript Templating)
  * Documentação: https://ejs.co/#docs
  * Serve para trabalharmos com arquivos HTML e CSS no NodeJS;
  * Motor de templates, sua função é desenhar o HTML em qualquer ponto da nossa aplicação;
  * Exemplo: Uma rota "/login", podemos mandar o EJS ir lá e desenhar o HTML nesse endpoint.
  * Podemos também usar JavaScript dentro do HTML;
  
  ![Bootstrap Logo](https://miro.medium.com/fit/c/1838/551/1*TJT7z7w3baYO0ON-6RbaYA.png)
  ##### Bootstrap 4
  * Serve para facilitar no desenvolvimento de estilo para a nossa aplicação web;
  * Design responsivo, se adapta ao tamanho da tela;
  * Para instalarmos:  https://getbootstrap.com/ -> Download -> Compiled CSS and JS
  * Quando você coloca os arquivos do bootstrap no seu projeto, é preciso colocar as dependências do Jquery e do popper;
  * Para achar o comando, basta ir na mesma página de Download -> BootstrapCDN
  * No caso de quando o projeto foi feito:
	```html  
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	```
  
  ### Bibliotecas específicas
  
  ##### Body-parser
  * Body-parser é utilizado para pegar os dados de um formulário e converter para uma estrutura JavaScript que possibilite
	utilizar no Back-End;
  
  ##### Sequelize
  * Utilizamos o Sequelize para nos conectarmos ao banco de dados MySQL;
  * Realiza todos os processos através do NodeJS com JavaScript;
  * Documentação: https://sequelize.org/
  ![Instalações](/imgGit/cmdInstallSequelize.PNG)
  * Caso aparece algum erro envolvendo a versão do MySQL, utilize o comando abaixo no MySQL workbench: (Só não esquecer de substituir os campos pelos seus dados)
  ```sql
  ALTER USER 'usuario'@'host' IDENTIFIED WITH mysql_native_password BY 'senha'
  ```
  
  
