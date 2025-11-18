//carrega a página home
function home() {
    window.location.href="index.html";
}

//functions que enviam para as páginas das matérias do ensino médio
function matematica() {
    window.location.href="matematica.html";
}

function humanas() {
    window.location.href="humanas.html";
}

function linguagens() {
    window.location.href="linguagens.html";
}

function natureza() {
    window.location.href="natureza.html";
}

//functions que enviam para as páginas das matérias do técnico
function modelagemDeSistemas() {
    window.location.href="modelagem-de-sistemas.html";
}

function bancoDeDados() {
    window.location.href="banco-de-dados.html";
}

function devSistemas() {
    window.location.href="dev-de-sistemas.html";
}

//carrega a página extras
function extras() {
    window.location.href="extras.html";
}

//faz o scroll ir para a seção sobre mim
function scrollSobreMim() {
    document.getElementById('about-me-container').scrollIntoView({
        behavior: 'smooth'
    });
}

//Criando os modais de cada trimestre de matemática
const modalPrimeiroTriMat = document.getElementById("modal-primeiro-mat");
const modalSegundoTriMat = document.getElementById("modal-segundo-mat");
const modalTerceiroTriMat = document.getElementById('modal-terceiro-mat')

function primeiroTrimestreMatematica() {
    modalPrimeiroTriMat.style.display = "flex";
}

function segundoTrimestreMatematica() {
    modalSegundoTriMat.style.display = "flex";
}

function terceiroTrimestreMatematica() {
    modalTerceiroTriMat.style.display = 'flex';
}

function fecharMat() {
    modalPrimeiroTriMat.style.display = "none";
    modalSegundoTriMat.style.display = "none";
    modalTerceiroTriMat.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriMat) {
        fecharMat();
    }
});

window.addEventListener("click", function(event) {
    if (event.target === modalSegundoTriMat) {
        fecharMat();
    }
});

window.addEventListener("click", function(event) {
    if (event.target === modalTerceiroTriMat) {
        fecharMat();
    }
});

//modal da atividade de matemática
const modalPasseMat = document.getElementById("modal-passe-mat-background");

function abrirModalMatPasse() {
    modalPasseMat.style.display = "grid";
}

function fecharModalMatPasse() {
    modalPasseMat.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalPasseMat) {
        fecharModalMatPasse();
    }
});

//Criando os modais de cada trimestre de humanas
const modalPrimeiroTriHumanas = document.getElementById("modal-primeiro-humanas");
const modalSegundoTriHumanas = document.getElementById("modal-segundo-humanas");
const modalTerceiroTriHumanas = document.getElementById('modal-terceiro-humanas');

function primeiroTrimestreHumanas() {
    modalPrimeiroTriHumanas.style.display = "flex";
}

function segundoTrimestreHumanas() {
    modalSegundoTriHumanas.style.display = "flex";
}

function terceiroTrimestreHumanas() {
    modalTerceiroTriHumanas.style.display = 'flex';
}

function fecharHumanas() {
    modalPrimeiroTriHumanas.style.display = "none";
    modalSegundoTriHumanas.style.display = "none";
    modalTerceiroTriHumanas.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriHumanas) {
        fecharHumanas();
    }
});

window.addEventListener("click", function(event) {
    if (event.target === modalSegundoTriHumanas) {
        fecharHumanas();
    }
});

window.addEventListener("click", function(event) {
    if (event.target === modalTerceiroTriHumanas) {
        fecharHumanas();
    }
});

//Criando os modais de cada trimestre de modelagem de sistemas
const modalPrimeiroTriModelagem = document.getElementById("modal-primeiro-modelagem");
const modalSegundoTriModelagem = document.getElementById("modal-segundo-modelagem");

function primeiroTrimestreModelagem() {
    modalPrimeiroTriModelagem.style.display = "flex";
}

function segundoTrimestreModelagem() {
    modalSegundoTriModelagem.style.display = "flex";
}

function fecharModelagem() {
    modalPrimeiroTriModelagem.style.display = "none";
    modalSegundoTriModelagem.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriModelagem) {
        fecharModelagem();
    }
});

window.addEventListener("click", function(event) {
    if (event.target === modalSegundoTriModelagem) {
        fecharModelagem();
    }
});

//Criando os modais de cada trimestre de linguagens
const modalPrimeiroTriLinguagens = document.getElementById("modal-primeiro-linguagens");
const modalSegundoTriLinguagens = document.getElementById('modal-segundo-linguagens');
const modalTerceiroTriLinguagens = document.getElementById('modal-terceiro-linguagens');

function primeiroTrimestreLinguagens() {
    modalPrimeiroTriLinguagens.style.display = "flex";
}

function segundoTrimestreLinguagens() {
    modalSegundoTriLinguagens.style.display = "flex";
}

function terceiroTrimestreLinguagens() {
    modalTerceiroTriLinguagens.style.display = 'flex';
}

function fecharLinguagens() {
    modalPrimeiroTriLinguagens.style.display = "none";
    modalSegundoTriLinguagens.style.display = "none";
    modalTerceiroTriLinguagens.style.display = 'none';
}

window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriLinguagens) {
        fecharLinguagens();
    }
});

window.addEventListener("click", function(event) {
    if (event.target === modalSegundoTriLinguagens) {
        fecharLinguagens();
    }
});

window.addEventListener("click", function(event) {
    if (event.target === modalTerceiroTriLinguagens) {
        fecharLinguagens();
    }
});

//Criando o modal da nota da redação (primeiro trimestre)
const modalNotaRedacao = document.getElementById("modal-redacao-background");

function abrirModalNotaRedacao() {
    modalNotaRedacao.style.display = "flex";
}

function fecharModalNotaRedacao() {
    modalNotaRedacao.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalNotaRedacao) {
        fecharModalNotaRedacao();
    }
});

//Criando o modal da nota da redação (segundo trimestre)
const modalNotaRedacaoDois = document.getElementById("modal-redacao2-background");

function abrirModalNotaRedacaoDois() {
    modalNotaRedacaoDois.style.display = "flex";
}

function fecharModalNotaRedacaoDois() {
    modalNotaRedacaoDois.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalNotaRedacaoDois) {
        fecharModalNotaRedacaoDois();
    }
});

//Criando o modal da nota da redação (terceiro trimestre)
const modalNotaRedacaoTres = document.getElementById("modal-redacao3-background");

function abrirModalNotaRedacaoTres() {
    modalNotaRedacaoTres.style.display = "flex";
}

function fecharModalNotaRedacaoTres() {
    modalNotaRedacaoTres.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalNotaRedacaoTres) {
        fecharModalNotaRedacaoTres();
    }
});

//Criando o modal dos comentários do padlet
const modalPadletObras = document.getElementById("modal-obras-background");

function abrirModalObrasPadlet() {
    modalPadletObras.style.display = "flex";
}

function fecharModalObrasPadlet() {
    modalPadletObras.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalPadletObras) {
        fecharModalObrasPadlet();
    }
});

//Criando os modais de cada trimestre de natureza
const modalPrimeiroTriNatureza = document.getElementById("modal-primeiro-natureza");
const modalSegundoTriNatureza = document.getElementById('modal-segundo-natureza');
const modalTerceiroTriNatureza = document.getElementById('modal-terceiro-natureza');

function primeiroTrimestreNatureza() {
    modalPrimeiroTriNatureza.style.display = "flex";
}

function segundoTrimestreNatureza() {
    modalSegundoTriNatureza.style.display = "flex";
}

function terceiroTrimestreNatureza() {
    modalTerceiroTriNatureza.style.display = 'flex';
}

function fecharNatureza() {
    modalPrimeiroTriNatureza.style.display = "none";
    modalSegundoTriNatureza.style.display = "none";
    modalTerceiroTriNatureza.style.display = 'none';
}

window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriNatureza) {
        fecharNatureza();
    }
});

window.addEventListener("click", function(event) {
    if (event.target === modalSegundoTriNatureza) {
        fecharNatureza();
    }
});

window.addEventListener("click", function(event) {
    if (event.target === modalTerceiroTriNatureza) {
        fecharNatureza();
    }
});

//Criando o modal do mapa mental de eletrostática
const modalMapaEletrostatica = document.getElementById("modal-eletrostatica-background");

function abrirModalEletrostatica() {
    modalMapaEletrostatica.style.display = "flex";
}

function fecharModalEletrostatica() {
    modalMapaEletrostatica.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalMapaEletrostatica) {
        fecharModalEletrostatica();
    }
});

//Criando o modal do mapa mental de sistema imunológico e vacinas
const modalMapaImunologico = document.getElementById("modal-imunologico-background");

function abrirModalImunologico() {
    modalMapaImunologico.style.display = "flex";
}

function fecharModalImunologico() {
    modalMapaImunologico.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalMapaImunologico) {
        fecharModalImunologico();
    }
});

//Criando o modal de banco de dados
const modalSegundoTriBanco = document.getElementById('modal-segundo-banco');

function segundoTrimestreBanco() {
    modalSegundoTriBanco.style.display = "flex";
}

function fecharSegundoTriBanco() {
    modalSegundoTriBanco.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalSegundoTriBanco) {
        fecharSegundoTriBanco();
    }
});

//Criando o modal de desenvolvimento de sistemas
const modalTerceiroTriDev = document.getElementById('modal-terceiro-dev');

function terceiroTrimestreDev() {
    modalTerceiroTriDev.style.display = 'flex';
}

function fecharDev() {
    modalTerceiroTriDev.style.display = 'none';
}

window.addEventListener("click", function(event) {
    if (event.target === modalTerceiroTriDev) {
        fecharDev();
    }
});

//Criando o modal do certificado da imersão front-end da alura
const modalCertificadoAlura = document.getElementById("modal-certificado-alura");

function abrirModalAlura() {
    modalCertificadoAlura.style.display = "flex";
}

function fecharModalAlura() {
    modalCertificadoAlura.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalCertificadoAlura) {
        fecharModalAlura();
    }
});

//Criando o modal da foto da Iniciação Científica
const modalIniciacao = document.getElementById("modal-iniciacao-background");

function abrirModaliniciacao() {
    modalIniciacao.style.display = "flex";
}

function fecharModaliniciacao() {
    modalIniciacao.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalIniciacao) {
        fecharModaliniciacao();
    }
});