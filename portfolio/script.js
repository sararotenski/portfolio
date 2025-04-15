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

function primeiroTrimestreMatematica() {
    let modalPrimeiroTriMat = document.getElementById("modal-primeiro-trimestre");
    modalPrimeiroTriMat.style.display = "flex";
}

function fecharPrimeiroTriMat(){
    let modalPrimeiroTriMat = document.getElementById("modal-primeiro-trimestre");
    modalPrimeiroTriMat.style.display = "none";
}