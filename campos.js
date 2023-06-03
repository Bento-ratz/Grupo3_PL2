document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o usuário está logado (exemplo: verificando uma variável de autenticação)
    var usuarioLogado = false; // Defina essa variável de acordo com a lógica de autenticação

    // Seleciona o botão de reservar
    var btnReservar1 = document.getElementById('btnReservar1');
    var btnReservar2 = document.getElementById('btnReservar2');
    var btnReservar3 = document.getElementById('btnReservar3');

    // Verifica se o usuário está logado ao clicar no botão de reservar 1
    btnReservar1.addEventListener('click', function(event) {
        if (!usuarioLogado) {
            exibirAvisoLogin(btnReservar1);
            event.preventDefault();
        }
    });

    // Verifica se o usuário está logado ao clicar no botão de reservar 2
    btnReservar2.addEventListener('click', function(event) {
        if (!usuarioLogado) {
            exibirAvisoLogin(btnReservar2);
            event.preventDefault();
        }
    });

    // Verifica se o usuário está logado ao clicar no botão de reservar 3
    btnReservar3.addEventListener('click', function(event) {
        if (!usuarioLogado) {
            exibirAvisoLogin(btnReservar3);
            event.preventDefault();
        }
    });

    // Função para exibir o aviso de login
    function exibirAvisoLogin(botao) {
        var aviso = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        aviso += 'Faça <a href= "login.html">login</a> para continuar.';
        aviso += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        aviso += '</div>';

        // Adiciona o aviso antes do botão
        botao.insertAdjacentHTML('beforebegin', aviso);
    }
});