function consultar() {
    let data = $(".data").val();
    const chave = 'dNNwrKhvOInpkMrKEmgsoja5JwVjMgnlOdiYIyDB';

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${data}`,
        success: function (resultado) {
            mostrarResultado(resultado);
        },
        error: function () {
            $(".mensagemErro").html("Data inválida").css({color: "red"})
        }
    })
}


function mostrarResultado(consulta) {
    const data = $("#data")
    const midia = $("#midia")
    const titulo = $("#titulo")
    const autor = $("#autor")
    const legenda = $("#legenda")


    data.html(moment(consulta.date).format('MMMM Do YYYY'))
    titulo.html(consulta.title);
    autor.html(`Créditos: ${consulta.copyright}`);
    legenda.html(`Sobre: ${consulta.explanation}`);


    if (consulta.media_type == 'image') {
        midia.html(`<img id="midiaJS" src="${consulta.url}" />`);
    } else {
        midia.html(`<iframe id="midiaJS" src="${consulta.url}?autoplay=1&mute=1"></iframe>`);
    }
}

function inicio(){
    location = "index.html";
}

function pesquisar(){
    location = "pesquisar.html"
}
