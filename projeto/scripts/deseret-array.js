  const oracao = {
  tipo: "oracao",
  imagem: "imagens/oracao.jpg",
  titulo: "Oração",
  formulario: {
    campos: [
      { label: "Seu nome", tipo: "input" },
      { label: "Motivo da oração", tipo: "textarea" },
      { label: "Enviar", tipo: "button" }
    ]
  }
};

const escrituras = {
  tipo: "escrituras",
  imagem: "imagens/escrituras.jpg",
  titulo: "Escrituras",
  link: "https://www.churchofjesuschrist.org/study/scriptures?lang=por",
  legenda: " Aprofunde-se na Palavra de Deus e descubra ensinamentos que transformam vidas. Aqui você encontra devocionais, estudos das escrituras sagradas, discursos dos profetas, ensinamentos dos líderes gerais e locais — tudo para fortalecer sua fé."

};

const comunidade = {
  tipo: "comunidade",
  imagem: "imagens/comunidade.jpg",
  titulo: "Comunidade",
  legenda: " Nossa missão é estar perto de você todos os dias, oferecendo palavras de esperança,estudos bíblicos, reflexões e um espaço seguro para compartilhar pedidos de oração. Por isso, criamos comunidades em diferentes plataformas, para que você possa se conectar da forma que for mais confortável.",
  Umlista: [
    "Blogger",
    "Instagram",
    "Facebook",
    "WhatsApp"
  ]
};


createConjuntCard([oracao, escrituras, comunidade]);  // objetos dentro de uma array

function createConjuntCard(conjunto) {

  document.querySelector(".conjunto").innerHTML = "";    // Limpa o conteúdo da <div class="conjunto">

  conjunto.forEach(item => {


    const card = document.createElement("div");          
    card.classList.add("card");   
     
    
    

    // ---------------- ORAÇÃO ----------------
    if (item.tipo === "oracao") {

      // FIGURE
      const figure = document.createElement("figure");
      
      
      const img = document.createElement("img");
      img.src = item.imagem;
      img.alt = item.titulo;
      img.setAttribute("loading", "lazy");
      

      const caption = document.createElement("figcaption");
      caption.textContent = item.titulo;

      figure.appendChild(img);
      figure.appendChild(caption);

      // FORMULÁRIO
      const form = document.createElement("form");


      item.formulario.campos.forEach(campo => {
        const label = document.createElement("label");
        label.textContent = campo.label;


        const input = document.createElement(campo.tipo);
        form.appendChild(label);
        form.appendChild(input);
      });

      card.appendChild(figure);
      card.appendChild(form);
     
    }

    // ---------------- ESCRITURAS ----------------
    if (item.tipo === "escrituras") {

      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.src = item.imagem;
      img.alt = item.titulo;
      img.setAttribute("loading", "lazy");

      const caption = document.createElement("figcaption");
      caption.textContent = item.titulo;

      figure.appendChild(img);
      figure.appendChild(caption);

      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = "Abrir Escrituras";

      const texto = document.createElement("p");
      texto.textContent = item.legenda;
     

      card.appendChild(figure);
      card.appendChild(link);
      card.appendChild(texto);
    }

    // ---------------- COMUNIDADE ----------------
    if (item.tipo === "comunidade") {

      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.src = item.imagem;
      img.alt = item.titulo;
      img.setAttribute("loading", "lazy");

      const caption = document.createElement("figcaption");
      caption.textContent = item.titulo;

      figure.appendChild(img);
      figure.appendChild(caption);

      const texto = document.createElement("p");
      texto.textContent = item.legenda;
     

      const ul = document.createElement("ul");

      item.Umlista.forEach(link => {
        const li = document.createElement("li");
        li.textContent = link;
        ul.appendChild(li);
      });

      card.appendChild(figure);
      card.appendChild(texto);
      card.appendChild(ul);
    }

    // ---------------- ADICIONAR AO HTML ----------------
    document.querySelector(".conjunto").appendChild(card);

  }); // fim do forEach

} // fim da função
