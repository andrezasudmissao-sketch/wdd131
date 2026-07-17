


document.getElementById("calcular").addEventListener("click", function() {  //Isso pega o botão do HTML.//

    let temperatura = Number(document.getElementById("temp").value); //“Quando alguém clicar nesse botão, execute essa função.”//
    let vento = Number(document.getElementById("vento").value); //Vamos dividir://

    let resultado = calcularSensacaoTermica(temperatura, vento); //“Calcule a sensação térmica usando esses dois valores.”//

    document.getElementById("resultado").textContent = resultado; //Essa linha mostra o resultado na tela. 
//.textContent
//Significa:
//“Troque o texto desse elemento pelo valor do resultado.”//

});


function calcularSensacaoTermica(temperatura, vento) {

    let cWC;

    if (temperatura <= 10 && vento > 4.8) {
    cWC = 13.12
     + 0.6215 * temperatura
     - 11.37 *Math.pow(vento, 0.16)
     + 0.3965 *temperatura * Math.pow(vento, 0.16);
     return cWC

} else {
     return "N/A"
}
  

}

//Recebe temperatura e vento
//Verifica corretamente as condições do sistema métrico
//Usa Math.pow(vento, 0.16) corretamente
//Aplica a fórmula de sensação térmica em Celsius
//Retorna o valor calculado
//Retorna "N/A" quando não pode calcular
//Não mistura Fahrenheit
//Não usa variáveis globais
//Declara cWC corretamente

//✔️ document.getElementById("temp")
//Pega o input:
//html
//<input id="temp" type="number">
//✔️ .value
//Pega o valor digitado dentro do input.

//✔️ Number(...)
//Converte o valor para número, porque inputs sempre retornam texto.

//Então essa linha significa:

//“Pegue o valor digitado no campo de temperatura e transforme em número.”

//let vento = Number(document.getElementById("vento").value);
//Mesma lógica da temperatura:

//pega o input com id "vento"

//lê o valor digitado

//transforma em número

