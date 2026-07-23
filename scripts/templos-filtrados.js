
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


const templos = [
  {
    nomeDoTemplo: "Accra Ghana",
    localizacao: "Gana, Accra",
    consagracao: "2001, 16 de novembro",
    area: 1.626,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    nomeDoTemplo: "Teresina",
    localizacao: "Piuaí - Brasil ",
    consagracao: "2026, 18 de abril",
    area: 2.362,
    urlDaImagem:
   "https://churchofjesuschristtemples.org/assets/img/temples/teresina-brazil-temple/teresina-brazil-temple-45009-main.jpg"
  },
  {
    nomeDoTemplo: "Recife",
    localizacao: "Pernanbuco - Brasil",
    consagracao: "1996, 11 de novembro",
    area: 3.456,
    urlDaImagem:
   "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
  },
  {
    nomeDoTemplo: "Califonia",
    localizacao: "California - Estados Unidos",
    consagracao: "1951, 22 de setembro",
    area: 17.709,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
  },
  {
    nomeDoTemplo: "Sapporo",
    localizacao: "Sapooro - Japão",
    consagracao: " 2011, 22 de outubro",
    area: 4.504,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
  },
  {
    nomeDoTemplo: "João Pessoa",
    localizacao: "João Pessoa - Paraíba",
    consagracao: "Sem data ainda",
    area:  1.751,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/joao-pessoa-brazil-temple/joao-pessoa-brazil-temple-50370-main.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake City",
    localizacao: "Salt Lake - Estados Unidos",
    consagracao: "1853, 14 de fevereiro",
    area: 35.508,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },

   {
    nomeDoTemplo: "Gilbert",
    localizacao: "Arizona - Estados Unidos",
    consagracao: "2010, 13 de novembro",
    area: 7.927,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
  },

   {
    nomeDoTemplo: "Samoa",
    localizacao: "Samoa - Apia",
    consagracao: "1981, 19 de fevereiro",
    area: 1.736,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
  },

];