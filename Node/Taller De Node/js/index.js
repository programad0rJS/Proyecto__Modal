// const chalk = require('chalk');

// console.log(chalk.red('Hola Mundo '))
const http = require('http');


 const Servidores = function (Daniel , Josue) {
     Josue.write('<h1>Hola Mundo, Mi puerto 6060</h1>');
     Josue.end();
     
 };

const server = http.createServer(Servidores);

 server.listen(6060, function () {
     console.log('localhost:6060')
 });

//  La Mejor Documentacion De Node https://www.w3schools.com/nodejs/, https://nodejs.org/es/about/ , Y LA pagina de node.



