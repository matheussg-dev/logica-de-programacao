alert('boas vindas ao jogo do numero secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('escolha um número 1 e 10');
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
if(tentativas > 1){
    alert(`você acertou ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`você acertou ${numeroSecreto} com ${tentativas} tentativa.`);
}