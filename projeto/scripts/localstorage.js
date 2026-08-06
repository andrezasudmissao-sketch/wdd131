//pegar o formulário
//escutar o evento submit
//chamar sua função dentro do submit
//mostrar o alerta dentro do submit, não dentro da função

const form = document.querySelector(".form-oracao");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    salvarinformacoes(); // Chama a função para salvar as informações no localStorage

    alert("Informações salvas com sucesso!"); // Mostra o alerta de sucesso
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