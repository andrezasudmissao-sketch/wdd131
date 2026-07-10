
// Armazene os elementos selecionados que iremos utilizar. Isto não é obrigatório, mas é uma boa prática com programas maiores onde a variável será referenciada mais de uma vez.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Adicione um ouvinte de evento de clique ao botão de hambúrguer e use uma função de retorno de chamada que alterna a lista de classes do elemento da lista.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔O que significa alternar?
Poderíamos escrever instruções de adição e remoção separadas. Toggle adiciona a classe se ela não existir no momento ou remove a classe se ela existir. 
As regras da classe CSS lidarão com as diferentes visualizações, layouts e exibições.
🗝️ JavaScript aplica apenas o valor da classe ou não.
*/



