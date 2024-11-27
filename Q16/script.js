let num1 = parseFloat(prompt('Digite o seu primeiro número: '));
let num2 = parseFloat(prompt('Digite o seu segundo número: '));

    let somaNums = num1 + num2;
    alert('A soma dos números é: ' + somaNums)

if (somaNums > 20) {
    somaNums += 8;
} else {
    somaNums -= 5;
}

alert('Seu resultado com a operação é: ' + somaNums)