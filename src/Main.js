//import {MenuCadastroDePacientes} from './MenuCadastroDePacientes.js';
//import {readlineSync} from './package.json'
const myFunctions = require('./MenuCadastroDePacientes.js');
const myFunctions2 = require('./MenuAgenda.js');

console.log('\nMenu Principal');
var  readlineSync  = require ( 'readline-sync' );
  menuPrincipal  = ['Cadastro de pacientes ' , 'Agenda ' ];
  index  = readlineSync.keyInSelect( menuPrincipal ,'Digite o comando desejado!', {cancel: 'Fim'});
console.log ( 'Ok, vamos ao menu de ' +  (menuPrincipal [index] == undefined ? 'Fim' : menuPrincipal [index]) + '!');

if (index == 0) {
  console.log('digitou 1')
  //console.table(menuPrincipal);
  myFunctions.menuCadastroDePacientes();
} else if (index == 1) {
  console.log('digitou 2')
  myFunctions2.menuAgenda();
  //MenuAgenda();
} else {
  console.log('digitou 0')
}