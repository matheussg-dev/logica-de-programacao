alert('boas vindas ao jogo do numero secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('escolha um número 1 e 10');
    if(chute == numeroSecreto){
    alert(`você acertou ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    if(chute > numeroSecreto){
        alert(`o número e menor que a ${chute}`);
    }else {
        alert(`o número e maior que a ${chute}`);
    }
    tentativas++;
}
} 