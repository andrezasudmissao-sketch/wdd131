//JAVA SCRIPTS USADO PARA QUE APAREÇA OS PRODUTOS PARA SELECIONAR//


const listprodutos = ["Camisas", "Vestidos", "Blusas", "Calças", "Saias"] //Um array é uma lista.

const select = document.querySelector("#av"); //selecionei o id do select.


function carregarprodutos() { 
for (let i = 0; i < listprodutos.length; i++) {  //percorreu o array
    const nossoproduto = listprodutos[i]; //pegou cada item, guardou em nossoproduto
    console.log(`Essa é a opção ${i}: ${nossoproduto}`); //exibiu no console
    
    const opcao = document.createElement("option");   // criar opção
    opcao.textContent = nossoproduto                         // texto da opção
    opcao.value = nossoproduto                              // value da opção

    select.appendChild(opcao);                        // adicionar ao select
//nossoproduto é o item atual do array.
}
}

carregarprodutos();


const produtos = [
  {
    id: "fc-1830",
    nome: "Camisa",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2030",
    nome: "Vestido",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1989",
    nome: "Blusa",
    classificacaomedia: 4.5
  },
  {
    id: "ac-2001",
    nome: "Calça",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1945",
    nome: "Saia",
    classificacaomedia: 5.0
  }
];//chamei a função para executar o código.

//Porque você quer percorrer todos os itens do array, e não sabe quantos são.
//Então você usa length para dizer:
//“Continue o loop enquanto o índice for menor que a quantidade de itens.”


//como usar as estrelas no java:

// const rangevalue = document.getElementById("rangevalue");
//const range = document.getElementById("r");

//range.addEventListener('change', displayRatingValue);
//range.addEventListener('input', displayRatingValue);

//function displayRatingValue() {
    //rangevalue.innerHTML = range.value;
//}



//Outra versão :

//const produtos = [
//  { id: "fc-1830", nome: "Camisa", classificacaomedia: 4.5 },
//  { id: "fc-2030", nome: "Vestido", classificacaomedia: 4.7 },
//  { id: "fs-1989", nome: "Blusa", classificacaomedia: 4.5 },
//  { id: "ac-2001", nome: "Calça", classificacaomedia: 3.9 },
//  { id: "jj-1945", nome: "Saia", classificacaomedia: 5.0 }
//];

//const select = document.querySelector("#av");

//function carregarprodutos() {
 // for (let i = 0; i < produtos.length; i++) {
  //  const produto = produtos[i];

 //   const opcao = document.createElement("option");
  //  opcao.textContent = produto.nome;   // texto da opção
 //   opcao.value = produto.id;           // value da opção

  //  select.appendChild(opcao);
 // }
//}

//carregarprodutos();






