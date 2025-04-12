function home() {
    window.location.href="index.html";
}

function ensinoMedio() {
    const ensinoMedioModal = document.getElementById("ensino-medio-modal");
    ensinoMedioModal.style.display = "block";

}

function fecharModalEnsinoMedio() {
    const ensinoMedioModal = document.getElementById('ensino-medio-modal');
    ensinoMedioModal.style.display = 'none';
}