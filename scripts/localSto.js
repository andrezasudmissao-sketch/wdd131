document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".avp");


    form.addEventListener("submit", function(event) {
        event.preventDefault();

        salvarinformacoes();

        alert("Informações salvas com sucesso!");
    });

    function salvarinformacoes () {
        let av = document.getElementById("av").value;
        let estrelas = document.querySelector('input[name="stars"]:checked').value;
        let calendario = document.getElementById("calendario").value;
        let marcados = [];

     if (document.getElementById("conforto").checked) {
    marcados.push("conforto");
       }

     if (document.getElementById("boa").checked) {
    marcados.push("boa");
      }

     if (document.getElementById("bonito").checked) {
    marcados.push("bonito");
      }

     if (document.getElementById("durabilidade").checked) {
    marcados.push("durabilidade");
     }

     if (document.getElementById("cores").checked) {
    marcados.push("cores");
}

        let feedback = document.getElementById("feedback").value;
        let nome = document.getElementById("nome").value;


        let informacoes = {
            av: av,
            estrelas: estrelas,
            calendario: calendario,
            marcados: marcados,
            feedback: feedback,
            nome: nome
           

        };

        localStorage.setItem("informacoes", JSON.stringify(informacoes));
    }

});
