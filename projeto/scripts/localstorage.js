//pegar o formulário
//escutar o evento submit
//chamar sua função dentro do submit
//mostrar o alerta dentro do submit, não dentro da função

document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".form-oracao");

    // Se o formulário não existir, o JS simplesmente não roda
    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        salvarinformacoes();

        alert("Informações salvas com sucesso!");
    });

    function salvarinformacoes () {
        let nome = document.getElementById("nome").value;
        let motivo = document.getElementById("motivo").value;

        let informacoes = {
            nome: nome,
            motivo: motivo
        };

        localStorage.setItem("informacoes", JSON.stringify(informacoes));
    }

});


