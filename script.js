function inicio() {
    location = "index.html";
}

function pesquisar() {
    location = "pesquisar.html";
}

function pesquisarData() {
    let data = $(".data").val();
    const apiKey = 'Sk0oacheSAeMtk6f8altpm2U0Y6OHOmxlOU4ncTU';

    $.ajax({ url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${data}`,
        success: function (resultado) {
            resultadoPesquisa(resultado);
        },
        error: function () {
            $(".mensagemErro").html("Data inválida").css({color: "red"});
        }
    });
}

function resultadoPesquisa(pesquisa) {
    const data = $("#data");
    const midia = $("#midia");
    const titulo = $("#titulo");
    const autor = $("#autor");
    const legenda = $("#legenda");

    data.html(moment(pesquisa.date).format('DD MMMM, YYYY'));
    titulo.html(pesquisa.title);
    autor.html(`Créditos: ${pesquisa.copyright}`);
    legenda.html(`Sobre: ${pesquisa.explanation}`);

    if (pesquisa.media_type == 'image') {
        midia.html(`<img id="midiaJS" src="${pesquisa.url}"/>`);
    } else {
        midia.html(`<iframe id="midiaJS" src="${pesquisa.url}?autoplay=1&mute=1"></iframe>`);
    }
}
