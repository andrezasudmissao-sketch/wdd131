//pegar o formul�rio
//escutar o evento submit
//chamar sua fun��o dentro do submit
//mostrar o alerta dentro do submit, n�o dentro da fun��o

console.log("script carregado")

function salvarinformacoes(form) {
    const nomeInput = form.querySelector('#nome') || form.querySelector('input');
    const motivoInput = form.querySelector('#motivo') || form.querySelector('textarea');

    const nome = nomeInput?.value || '';
    const motivo = motivoInput?.value || '';

    const informacoes = {
        nome: nome,
        motivo: motivo
    };

    localStorage.setItem('informacoes', JSON.stringify(informacoes));
}

function inicializarFormulario() {
    const form = document.querySelector('oracao');

    if (!form) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        salvarinformacoes(form);
        alert('Informa��es salvas com sucesso!');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarFormulario);
} else {
    inicializarFormulario();
}
