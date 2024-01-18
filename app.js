alert('boas vindas ao jogo do numero secreto.');
let numeroMaximo = parseInt(Math.random() * 1000 + 1)
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`escolha um número 1 e ${numeroMaximo}.`);
    if(chute == numeroSecreto){
        break;
    } else {
    if(chute > numeroSecreto){
        alert(`o número e menor que ${chute}.`);
    }else {
        alert(`o número e maior que ${chute}.`);
    }
    tentativas++;
    }   
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`você acertou ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);