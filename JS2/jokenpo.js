const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var pontuacao = 0;

function novaRodada() {
    readline.question('Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura\nVocê escolheu: ', jogadaUsuario => {
        jogadaUsuario = parseInt(jogadaUsuario);
        var jogadas = ["", "Papel", "Pedra", "Tesoura"];
        if (jogadaUsuario < 1 || jogadaUsuario > 3) {
            console.log("Opção inválida! Você perdeu a rodada e o jogo acabou.");
            console.log("A sua pontuação foi de " + pontuacao);
            readline.close();
        } else {
            var jogadaComputador = Math.floor(Math.random() * 3) + 1;
            console.log("Você jogou " + jogadas[jogadaUsuario] + ".");
            console.log("O computador jogou " + jogadas[jogadaComputador] + ".");

            if ((jogadaUsuario == 1 && jogadaComputador == 3) ||
                (jogadaUsuario == 2 && jogadaComputador == 1) ||
                (jogadaUsuario == 3 && jogadaComputador == 2)) {
                pontuacao++;
                console.log("Você ganhou a rodada!");
                novaRodada();
            } else if (jogadaUsuario == jogadaComputador) {
                console.log("Empate!");
                novaRodada();
            } else {
                console.log("Você perdeu a rodada! A sua pontuação foi de " + pontuacao);
                readline.close();
            }
        }
    });
}

novaRodada();
