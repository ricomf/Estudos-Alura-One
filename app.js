alert('Boas vindas ao jogo do mundo secreto');
let numeroSecreto = 29;
let chute = prompt('Escolha um número entre 1 e 30');

if(chute == numeroSecreto) {
    print('Parabéns!!');
}
else {
    let novachance = prompt('Tente novamente Escolha um número entre 1 e 30');
    while(novachance != numeroSecreto) {
        let novachance = prompt('Tente novamente Escolha um número entre 1 e 30');
        if(novachance == numeroSecreto) {
            alert('Parabéns!!!');
            break;
        }
    }
}

