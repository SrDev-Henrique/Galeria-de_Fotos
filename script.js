$(document).ready(function () {
    
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('.cancelbtn').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoNovaImagem = $("#endereçoImagemNova").val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src='${enderecoNovaImagem}' />`).appendTo(novoItem);
        $(`
            <div class="linkContainer">
                <a href="${enderecoNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver Imagem Em Tamanho Real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereçoImagemNova').val('');
    })
})