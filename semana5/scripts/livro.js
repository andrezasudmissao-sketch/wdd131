const input = document.querySelector('#favchap');      // pega o campo onde o usuário digita o capítulo
const botao = document.querySelector('button');        // pega o botão "Adicionar capítulo"
const lista = document.querySelector('#list');         // pega a lista <ul> onde os capítulos serão exibidos

let arrayCapitulos = obterListaDeCapitulos() || [];    // carrega capítulos do localStorage ou cria array vazio

arrayCapitulos.forEach(capitulo => {                   // percorre cada capítulo salvo anteriormente
  exibirLista(capitulo);                               // exibe cada capítulo na lista ao carregar a página
});

botao.addEventListener('click', () => {                // quando o botão for clicado
  if (input.value.trim() !== '') {                     // verifica se o input não está vazio
    exibirLista(input.value);                          // exibe o capítulo na lista visual
    arrayCapitulos.push(input.value);                  // adiciona o capítulo ao array
    definirListaDeCapitulos();                         // salva o array atualizado no localStorage
    input.value = '';                                  // limpa o campo de texto
    input.focus();                                     // devolve o foco ao input
  }
});

function exibirLista(item) {                           // função que cria e exibe um capítulo na lista
  let li = document.createElement('li');               // cria o elemento <li>
  let botaoExcluir = document.createElement('button'); // cria o botão de excluir

  li.textContent = item;                               // coloca o texto do capítulo dentro do <li>
  botaoExcluir.textContent = '❌';                     // coloca o símbolo de excluir no botão
  botaoExcluir.classList.add('delete');                // adiciona classe para estilizar o botão

  li.append(botaoExcluir);                             // coloca o botão dentro do <li>
  lista.append(li);                                    // adiciona o <li> na lista <ul>

  botaoExcluir.addEventListener('click', () => {       // quando o botão ❌ for clicado
    lista.removeChild(li);                             // remove o <li> da lista visual
    excluirCapitulo(li.textContent);                   // remove o capítulo do array e do localStorage
    input.focus();                                     // devolve o foco ao input
  });
}

function definirListaDeCapitulos() {                   // função que salva o array no localStorage
  localStorage.setItem('minhaListaFavoritosLDM',       // nome da chave no localStorage
    JSON.stringify(arrayCapitulos));                   // transforma o array em string JSON
}

function obterListaDeCapitulos() {                     // função que carrega a lista do localStorage
  return JSON.parse(localStorage.getItem('minhaListaFavoritosLDM')); // transforma JSON em array
}

function excluirCapitulo(capitulo) {                   // função que exclui capítulo do array e do localStorage
  capitulo = capitulo.slice(0, capitulo.length - 1);   // remove o ❌ do final do texto do <li>
  arrayCapitulos = arrayCapitulos.filter(item =>       // filtra o array removendo o capítulo clicado
    item !== capitulo);                                // mantém apenas os capítulos diferentes
  definirListaDeCapitulos();                           // salva o array atualizado no localStorage
}

