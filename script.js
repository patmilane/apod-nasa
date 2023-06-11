function inicio() {
    location = "index.html";
}

function pesquisar() {
    location = "pesquisar.html";
}

function pesquisarData() {
    let data = $(".data").val();

    $.ajax({ url: `https://api.nasa.gov/planetary/apod?api_key=l9BvZKmGDcAazezT6Qn85u2DzY5g81NTNrRjBXcE&date=${data}`,
        success: function (resultado) {
            resultadoPesquisa(resultado);
            $(".mensagemErro").html(" "); //pra sumir o erro quando a requisição funcionar
        },
        error: function () {
            $(".mensagemErro").html("Ocorreu um erro na API").css({color: "red"});
        }
    });
}

function resultadoPesquisa(pesquisa) {
    const imagem = $("#imagem");
    const titulo = $("#titulo");
    const autor = $("#autor");
    const legenda = $("#legenda");
    //const data = $("#data");

    //data.html(moment(pesquisa.date).format('DD MMMM, YYYY'));
    titulo.html(pesquisa.title);
    autor.html(`Créditos: ${pesquisa.copyright}`);
    legenda.html(`Sobre: ${pesquisa.explanation}`);

    if (pesquisa.media_type == 'image') {
        imagem.html(`<img id="midiaJS" src="${pesquisa.url}"/>`);
    } else {
        imagem.html(`<iframe id="midiaJS" src="${pesquisa.url}?autoplay=1&mute=1" width="650" height="375"></iframe>`);
    }
}

/////////////// DARK MODE

const selecionar = document.getElementById('selecionar');
const divinputs = document.getElementById('divinputs');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

selecionar.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    divinputs.style.color = "#4D4F50";    
    header.style.filter = "invert(62%) sepia(19%) saturate(26%) hue-rotate(86deg) brightness(78%) contrast(119%)";
    footer.style.filter = "invert(62%) sepia(19%) saturate(26%) hue-rotate(86deg) brightness(68%) contrast(119%)";
});

