
const btn = document.getElementById("hamburguer"); // botão ☰
const menu = document.querySelector(".navigation"); // UL do menu

btn.addEventListener("click", () => {
    menu.classList.toggle("show"); // abre/fecha o menu

    // troca o ícone
    if (menu.classList.contains("show")) {
        btn.textContent = "X";   // ícone de fechar
    } else {
        btn.textContent = "☰";  // ícone de abrir
    }
});


// const btn = document.getElementById("hamburguer");
//document.getElementById("hamburguer") // 
//→ procura no HTML o elemento com id="hamburguer"
//Esse é o botão que mostra o símbolo ☰ no mobile.//
//👉 Agora a variável btn representa o botão.//

//const menu = document.querySelector(".navigation");
//document.querySelector(".navigation")  
//→ procura no HTML o elemento com class="navigation"
//Esse é o <ul> que contém os links do menu.
//👉 Agora a variável menu representa a lista de links.

//Detectando o clique no botão
//js
//btn.addEventListener("click", () => {
//addEventListener("click", ...)  
//→ significa: “quando o botão for clicado, execute essa função”.
//👉 Tudo dentro das chaves {} acontece quando você clica no hambúrguer.

//Abrindo e fechando o menu
//js
//menu.classList.toggle("show");
//classList.toggle("show")  
//→ se a classe show não existe, ele coloca  
//→ se já existe, ele remove

//No CSS você tem:

//css
//nav ul.show {
 //   display: flex;
//}
//Ou seja:
//sem .show → menu escondido
//com .show → menu visível
//👉 Essa linha é a responsável por abrir e fechar o menu.

//Trocando o ícone do botão
//js
//if (menu.classList.contains("show")) {
  //  btn.textContent = "X";
//} else {
   // btn.textContent = "☰";
//}
//O que acontece aqui:
//menu.classList.contains("show")  
//→ verifica se o menu está aberto
//Se estiver aberto:
//o botão vira X (para fechar)
//Se estiver fechado:
//o botão volta para ☰ (para abrir)
//👉 Isso deixa o menu mais intuitivo para o usuário.

