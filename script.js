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
    const imagem = $("#imagem");
    const titulo = $("#titulo");
    const autor = $("#autor");
    const legenda = $("#legenda");

    data.html(moment(pesquisa.date).format('DD MMMM, YYYY'));
    titulo.html(pesquisa.title);
    autor.html(`Créditos: ${pesquisa.copyright}`);
    legenda.html(`Sobre: ${pesquisa.explanation}`);

    if (pesquisa.media_type == 'image') {
        imagem.html(`<img id="midiaJS" src="${pesquisa.url}"/>`);
    } else {
        imagem.html(`<iframe id="midiaJS" src="${pesquisa.url}?autoplay=1&mute=1" width="600" height="350"></iframe>`);
    }
}

///////////////

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

