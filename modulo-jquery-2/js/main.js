$(document).ready(function() {
    $('#carrousel-imagens').slick({
        autoplay: true
    });
    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {placeholder: '(__) _____-____'});

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInterece: {
                required: false
            }
        },
        messages: {
            nome: "Insira o seu nome"
        },
        submitHandler: function(form) {

        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();
            alert(`Existem ${camposInvalidos} campos Invalidos`);
        }
    });
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo-interece').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});