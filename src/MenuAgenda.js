// Importa o pacote prompt-sync
const prompt = require('prompt-sync')();

function MenuAgenda() {
  console.log('\nAgenda');

  const menuAgenda = ['Agendar consulta', 'Cancelar agendamento', 'Listar agenda'];
  
  console.log('Digite o comando desejado:');
  menuAgenda.forEach((option, index) => {
    console.log(`${index + 1} - ${option}`);
  });
  console.log('0 - Voltar para o menu principal');

  const choice = prompt('Selecione uma opção: ');
  const index = parseInt(choice) - 1;

  console.log('Ok, vamos ao menu de ' + (menuAgenda[index] === undefined ? 'Início' : menuAgenda[index]) + '!');

  if (index === 0) {
    console.log('digitou 1 - Agendar consulta');
  } else if (index === 1) {
    console.log('digitou 2 - Cancelar agendamento');
  } else if (index === 2) {
    console.log('digitou 3 - Listar agenda');
  } else {
    console.log('digitou 0 - Retornando ao menu principal');
    const main = require('./Main.js').mainMenu;
    main();
  }
}

module.exports.MenuAgenda = MenuAgenda;

if (require.main === module) {
  MenuAgenda();
}
