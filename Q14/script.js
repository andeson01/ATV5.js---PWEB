let num1 = parseFloat(prompt('Digite o seu primeiro número: '))
let num2 = parseFloat(prompt('Digite o seu segundo número: '))
let num3 = parseFloat(prompt('Digite o seu terceiro número: '))

    let maior = num1;

if(num2 > maior){
    maior = num2;
}

if (num3 > maior) {
    maior = num3;
}

alert('O maior número digitado é: ' +  maior)