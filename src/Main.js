// Importa o pacote prompt-sync
const prompt = require('prompt-sync')();

function mainMenu() {
  console.log('\nMenu Principal');
  const menuPrincipal = ['Cadastro de Pacientes', 'Agenda'];

  console.log('Digite o comando desejado!');
  menuPrincipal.forEach((option, index) => {
    console.log(`${index + 1} - ${option}`);
  });
  console.log('0 - Fim');

  const choice = prompt('Selecione uma opção: ');
  const index = parseInt(choice) - 1;

  if (index === -1) {
    console.log('Encerrando...');
    return;
  } else if (index === 0) {
    console.log('digitou 1 - Cadastro de Pacientes');
    const menuCadastroDePacientes = require('./MenuCadastroDePacientes.js').MenuCadastroDePacientes;
    menuCadastroDePacientes();
  } else if (index === 1) {
    console.log('digitou 2 - Agenda');
    const menuAgenda = require('./MenuAgenda.js').MenuAgenda;
    menuAgenda();
  } else {
    console.log('Opção inválida');
  }
}

module.exports.mainMenu = mainMenu;

if (require.main === module) {
  mainMenu();
}

