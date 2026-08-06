const btn = document.getElementById("hamburguer"); // botão ☰
console.log("btn:", btn);
const menu = document.querySelector("#menu"); // UL do menu

btn.addEventListener("click", () => {
    menu.classList.toggle("show"); // abre/fecha o menu

    // troca o ícone
    if (menu.classList.contains("show")) {
        btn.textContent = "X";   // ícone de fechar
    } else {
        btn.textContent = "☰";  // ícone de abrir
    }
});