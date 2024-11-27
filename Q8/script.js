    let salario = prompt('Digite o seu salário (em R$): ')
    let percAumento = prompt('Qual o percentual de aumento (em %): ')

    salario = parseFloat(salario);
    percAumento = parseFloat(percAumento);

        let aumento = (salario * percAumento) / 100;

            let novoSalário = salario + aumento;

    alert('O aumento foi de: ' + aumento + 'R$');
    alert('O salário com seu aumento foi de: ' + novoSalário + 'R$');
    console.log('O aumento foi de: ' + aumento + 'R$');
    console.log('O salário com seu aumento foi de: ' + novoSalário + 'R$');



