// 1. Referências aos elementos
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// 2. Clique do botão
button.addEventListener('click', function() {

    // 3. Verificação: input não pode estar vazio
    if (input.value.trim() !== '') {

        // Criar o <li>
        const li = document.createElement('li');

        // Criar o botão de excluir
        const botaoExcluir = document.createElement('button');

        // Colocar o texto do input dentro do <li>
        li.textContent = input.value;

        // Colocar o símbolo ❌ no botão
        botaoExcluir.textContent = '❌';

        // Anexar o botão ao <li>
        li.append(botaoExcluir);

        // Anexar o <li> à lista
        list.append(li);

        // Limpar o input
        input.value = '';

        // Focar novamente no input
        input.focus();

    } else {

        // Caso o input esteja vazio
        console.log('Está em branco');
        input.focus();
        return;
    }
});

