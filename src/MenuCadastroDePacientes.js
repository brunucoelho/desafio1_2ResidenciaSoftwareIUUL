
// Importa o pacote prompt-sync
const prompt = require('prompt-sync')();

// Função MenuCadastroDePacientes
function MenuCadastroDePacientes() {
  while (true) {
    console.log('\nMenu do Cadastro de Pacientes');
    
    // Opções do menu
    const menuCadastro = [
      'Cadastrar novo paciente',
      'Excluir paciente',
      'Listar pacientes (ordenado por CPF)',
      'Listar pacientes (ordenado por nome)'
    ];
    
    // Exibe as opções para o usuário
    console.log('Digite o comando desejado:');
    menuCadastro.forEach((option, index) => {
      console.log(`${index + 1} - ${option}`);
    });
    console.log('0 - Voltar para o menu principal');

    // Captura a escolha do usuário
    const choice = prompt('Selecione uma opção: ');
    const index = parseInt(choice) - 1;

    console.log(
      'Ok, vamos ao menu de ' + (menuCadastro[index] === undefined ? 'Início' : menuCadastro[index]) + '!'
    );

    // Verifica a escolha do usuário e executa a ação correspondente
    if (index === 0) {
      console.log('digitou 1 - Cadastrar novo paciente');
    } else if (index === 1) {
      console.log('digitou 2 - Excluir paciente');
    } else if (index === 2) {
      console.log('digitou 3 - Listar pacientes (ordenado por CPF)');
    } else if (index === 3) {
      console.log('digitou 4 - Listar pacientes (ordenado por nome)');
    } else {
      console.log('digitou 0 - Retornando ao menu principal');
      const main = require('./Main.js').mainMenu;
      main(); // Retorna ao menu principal
      break; // Sai do loop
    }
  }
}

// Exporta a função para uso em outros arquivos
module.exports.MenuCadastroDePacientes = MenuCadastroDePacientes;

// Executa a função diretamente se o arquivo for executado individualmente
if (require.main === module) {
  MenuCadastroDePacientes();
}
