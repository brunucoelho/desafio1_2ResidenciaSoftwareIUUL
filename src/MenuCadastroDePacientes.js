console.log('\nMenu do Cadastro de Pacientes');
var  readlineSync  = require ( 'readline-sync' );
  menuCadastro  = ['Cadastrar novo paciente ' , 'Excluir paciente', 'Listar pacientes (ordenado por CPF)', 'Listar pacientes (ordenado por nome)' ];
  index  = readlineSync.keyInSelect( menuCadastro ,'Digite o comando desejado!', {cancel: 'Voltar p/ menu principal'});
console.log ( 'Ok, vamos ao menu de ' +  (menuCadastro [index] == undefined ? 'Início' : menuCadastro [index]) + '!');;
/*function menuCadastroDePacientes(a, b) {
  return a + b
};*/

module.exports = {
  menuCadastroDePacientes,
}

