//carrega a página home
function home() {
    window.location.href="home.html";
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

//Declarando uma variável e armanezando ela o modal
const modalPrimeiroTriMat = document.getElementById("modal-primeiro-mat");

//Criando a função de abrir o modal, quando o botão for clicado
function primeiroTrimestreMatematica() {
    modalPrimeiroTriMat.style.display = "flex";
}

//Criando a função de fechar o modal, quando o botão for clicado
function fecharPrimeiroTriMat() {
    modalPrimeiroTriMat.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, ele se fecha
window.addEventListener("click", function(event) {
    if (event.target === modalPrimeiroTriMat) {
        fecharPrimeiroTriMat();
    }
});

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