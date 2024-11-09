console.log('\nAgenda');
var  readlineSync  = require ( 'readline-sync' );
  menuCadastro  = ['Agendar consulta' , 'Cancelar agendamento', 'Listar agenda'];
  index  = readlineSync.keyInSelect( menuCadastro ,'Digite o comando desejado!', {cancel: 'Voltar p/ menu principal'});
console.log ( 'Ok, vamos ao menu de ' +  (menuCadastro [index] == undefined ? 'Início' : menuCadastro [index]) + '!');;
/*function menuCadastroDePacientes(a, b) {
  return a + b
};*/

module.exports = {
  menuAgenda,
}