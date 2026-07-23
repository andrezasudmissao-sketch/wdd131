
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
    nomeDoTemplo: "Accra Gana",
    localizacao: "Gana, Accra",
    dedicacao: "2001-11-16",
    area: 1.626,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    nomeDoTemplo: "Teresina",
    localizacao: "Piuaí - Brasil ",
    dedicacao: "2026-04-18",
    area: 2.362,
    imageUrl:
   "https://churchofjesuschristtemples.org/assets/img/temples/teresina-brazil-temple/teresina-brazil-temple-45009-main.jpg"
  },
  {
    nomeDoTemplo: "Recife",
    localizacao: "Pernanbuco - Brasil",
    dedicacao: "1996-11-11",
    area: 3.456,
    imageUrl:
   "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
  },
  {
    nomeDoTemplo: "Califonia",
    localizacao: "California - Estados Unidos",
    dedicacao: "1951-09-02",
    area: 17.709,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
  },
  {
    nomeDoTemplo: "Sapporo",
    localizacao: "Sapooro - Japão",
    dedicacao: " 2011-10-22",
    area: 4.504,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
  },
  {
    nomeDoTemplo: "João Pessoa",
    localizacao: "João Pessoa - Paraíba",
    dedicacao: "2028-02-12",
    area:  1.751,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/joao-pessoa-brazil-temple/joao-pessoa-brazil-temple-50370-main.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake City",
    localizacao: "Salt Lake - Estados Unidos",
    dedicacao: "1853-01-14",
    area: 35.508,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },

   {
    nomeDoTemplo: "Gilbert",
    localizacao: "Arizona - Estados Unidos",
    dedicacao: "2010-11-13",
    area: 7.927,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
  },

   {
    nomeDoTemplo: "Samoa",
    localizacao: "Samoa - Apia",
    dedicacao: "1981-02-19",
    area: 1.736,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
  },

];

const cutoffDate = new Date('1950-01-01');               // Define uma data limite para separar templos antigos e novos
const largeArea = 50000;                                 // Define o valor que será usado para distinguir templos grandes e pequenos

function setFiler(selector, filterFunction) {             // Função que associa um filtro a um elemento HTML (botão, link, etc.)
  const element = document.querySelector(selector);       // Seleciona o elemento na página pelo seletor CSS

  element.addEventListener('click', () => {               // Adiciona um evento de clique ao elemento
    toggleActive(element);                                // Chama uma função (não mostrada aqui) para destacar o botão ativo
    createTempleCard(templos.filter(filterFunction));     // Aplica o filtro e recria os cartões dos templos filtrados
  });
}

setFiler('#all', () => templos);                          // Mostra todos os templos (sem filtro)
setFiler('#old', temple => new Date(temple.dedicacao) < cutoffDate);  // Mostra templos dedicados antes de 1950
setFiler('#new', temple => new Date(temple.dedicacao) >= cutoffDate); // Mostra templos dedicados a partir de 1950
setFiler('#large', temple => temple.area > largeArea);    // Mostra templos com área maior que 50.000 pés
setFiler('#small', temple => temple.area < largeArea);    // Mostra templos com área menor que 50.000 pés


createTempleCard(templos);

function createTempleCard(templos) {                     // Função que cria cartões de templos a partir de uma lista (array) de objetos
  document.querySelector(".temple").innerHTML = "";    // Limpa o conteúdo atual do contêiner com a classe "res-grid"

  templos.forEach(temple => {                            // Percorre cada templo dentro do array 'templos'
    let card = document.createElement("section");         // Cria um elemento <section> para o cartão
    let name = document.createElement("h3");              // Cria um elemento <h3> para o nome do templo
    let localizacao = document.createElement("p");           // Cria um elemento <p> para a localização
    let dedicacao = document.createElement("p");         // Cria um elemento <p> para a dedicação
    let area = document.createElement("p");               // Cria um elemento <p> para o tamanho/área
    let img = document.createElement("img");              // Cria um elemento <img> para a imagem do templo

    name.textContent = temple.nomeDoTemplo;                 // Define o texto do nome do templo
    localizacao.innerHTML = `<span class="label">Localização:</span> ${temple.localizacao}`; // Insere a localização com uma etiqueta
    dedicacao.innerHTML = `<span class="label">Dedicado:</span> ${temple.dedicacao}`; // Insere a dedicação com uma etiqueta
    area.innerHTML = `<span class="label">Tamanho:</span> ${temple.area} pés`;          // Insere o tamanho com uma etiqueta
    img.setAttribute("src", temple.imageUrl);             // Define o caminho da imagem
    img.setAttribute("alt", `Templo ${temple.nomeDoTemplo}`); // Define o texto alternativo da imagem
    img.setAttribute("loading", "lazy");                  // Ativa o carregamento preguiçoso (lazy loading) da imagem

    card.appendChild(name);                               // Adiciona o nome ao cartão
    card.appendChild(localizacao);                           // Adiciona a localização ao cartão
    card.appendChild(dedicacao);                         // Adiciona a dedicação ao cartão
    card.appendChild(area);                               // Adiciona o tamanho ao cartão
    card.appendChild(img);                                // Adiciona a imagem ao cartão

    document.querySelector(".temple").appendChild(card); // Insere o cartão completo dentro do contêiner principal
  });
}


