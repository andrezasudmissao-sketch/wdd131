//Adicione uma propriedade secoes ao objeto. Como o curso pode ter mais de uma seção, faça dessas seções um array de pelo menos 2 (dois) objetos com as seguintes propriedades:
//-secao
//-matriculado
//-instrutor

let umCurso = {
  codigo: "WDD131",
  nome: "Fundamentos da Web Dinâmica",
  creditos: 2,
  secoes: [
    { secao: "001", matriculado: 95, instrutor: "Roberto Diaz Rodriguez" },
    { secao: "002", matriculado: 80, instrutor: "Sarah Gobble" }
  ] };

  //Crie uma função chamada definirInformacoesCurso para definir o código e o nome do curso em HTML.
  // Passe o objeto do curso para sua função. Use a notação de ponto para acessar o elemento com o id nomeCurso na página HTML:

 function  definirInformacoesCurso(curso) {
     
     document.querySelector("#nomeCurso").innerHTML = `${curso.codigo} – ${curso.nome}`;
    
  }
    

  //Diferença prática entre os dois
//getElementById("nomeCurso")
//Mais antigo
//Levemente mais rápido (diferença irrelevante hoje)
//Só funciona para id
//Retorna direto o elemento
//querySelector("#nomeCurso")
//Mais moderno

//Funciona com qualquer seletor CSS

//#id
//.classe
//tag
//[atributo]
//combinações complexas
//Permite manter um padrão único para selecionar elementos
//É o mais usado em projetos atuais



  //Crie outra função chamada exibirSecoes que irá exibir as seções em uma tabela com um id de secoes:

  function exibirSecoes(curso) {
  const tbody = document.querySelector("#secoes tbody");
  let linhas = "";
  for (const secao of curso.secoes) {
    linhas += `<tr>
      <td>${secao.secao}</td>
      <td>${secao.matriculado}</td>
      <td>${secao.instrutor}</td>
    </tr>`;
  }
  tbody.innerHTML = linhas;
}