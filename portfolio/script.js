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

function IoT() {
    window.location.href="internet-das-coisas.html";
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

//Criando o modal do primeiro trimestre de matemática
const modalPrimeiroTriMat = document.getElementById("modal-primeiro-mat");
const modalSegundoTriMat = document.getElementById("modal-segundo-mat");

function primeiroTrimestreMatematica() {
    modalPrimeiroTriMat.style.display = "flex";
}

function segundoTrimestreMatematica() {
    modalSegundoTriMat.style.display = "flex";
}

function fecharMat() {
    modalPrimeiroTriMat.style.display = "none";
    modalSegundoTriMat.style.display = "none";
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

//Criando o modal do primeiro trimestre de humanas
const modalPrimeiroTriHumanas = document.getElementById("modal-primeiro-humanas");

function primeiroTrimestreHumanas() {
    modalPrimeiroTriHumanas.style.display = "flex";
}

function fecharPrimeiroTriHumanas() {
    modalPrimeiroTriHumanas.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriHumanas) {
        fecharPrimeiroTriHumanas();
    }
});

const modalSegundoTriHumanas = document.getElementById("modal-segundo-humanas");
function segundoTrimestreHumanas() {
    modalSegundoTriHumanas.style.display = "flex";
}

function fecharSegundoTriHumanas() {
    modalSegundoTriHumanas.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalSegundoTriHumanas) {
        fecharSegundoTriHumanas();
    }
});

//Criando o modal do primeiro trimestre de modelagem de sistemas
const modalPrimeiroTriModelagem = document.getElementById("modal-primeiro-modelagem");

function primeiroTrimestreModelagem() {
    modalPrimeiroTriModelagem.style.display = "flex";
}

function fecharPrimeiroTriModelagem() {
    modalPrimeiroTriModelagem.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriModelagem) {
        fecharPrimeiroTriModelagem();
    }
});

//Criando o modal do primeiro trimestre de linguagens
const modalPrimeiroTriLinguagens = document.getElementById("modal-primeiro-linguagens");

function primeiroTrimestreLinguagens() {
    modalPrimeiroTriLinguagens.style.display = "flex";
}

function fecharPrimeiroTriLinguagens() {
    modalPrimeiroTriLinguagens.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriLinguagens) {
        fecharPrimeiroTriLinguagens();
    }
});

//Criando o modal da nota da redação
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

//Criando o modal do primeiro trimestre de natureza
const modalPrimeiroTriNatureza = document.getElementById("modal-primeiro-natureza");

function primeiroTrimestreNatureza() {
    modalPrimeiroTriNatureza.style.display = "flex";
}

function fecharPrimeiroTriNatureza() {
    modalPrimeiroTriNatureza.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriNatureza) {
        fecharPrimeiroTriNatureza();
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