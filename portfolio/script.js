//carrega a página home
function home() {
    window.location.href="home.html";
}

//faz com que o modal das matérias do ensino médio apareçam
function ensinoMedio() {
    const ensinoMedioModal = document.getElementById("ensino-medio-modal");
    ensinoMedioModal.style.display = "block";

}

//fecha o modal das matérias do ensino médio
function fecharModalEnsinoMedio() {
    const ensinoMedioModal = document.getElementById('ensino-medio-modal');
    ensinoMedioModal.style.display = 'none';
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