var pontuacao = 0;
var jogadas = ["", "Papel", "Pedra", "Tesoura"];

function novaRodada(jogadaUsuario) {
    var jogadaComputador = Math.floor(Math.random() * 3) + 1;
    document.getElementById('resultado').innerHTML = "Você jogou " + jogadas[jogadaUsuario] + ".<br>O computador jogou " + jogadas[jogadaComputador] + ".";

    if ((jogadaUsuario == 1 && jogadaComputador == 3) ||
        (jogadaUsuario == 2 && jogadaComputador == 1) ||
        (jogadaUsuario == 3 && jogadaComputador == 2)) {
        pontuacao++;
        document.getElementById('resultado').innerHTML += "<br>Você ganhou a rodada!";
    } else if (jogadaUsuario == jogadaComputador) {
        document.getElementById('resultado').innerHTML += "<br>Empate!";
    } else {
        document.getElementById('resultado').innerHTML += "<br>Você perdeu a rodada! Sua pontuação final é: " + pontuacao;
    }
}
