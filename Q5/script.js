// Criando variável para que o usuário digite e seja armazenada o valor que quer reajustar
    let saldo = prompt('Digite o valor para o reajuste de 33,33%: ')
        saldo = parseFloat(saldo);

// Calcula o reajuste
    let reajuste = saldo * 1.3333;

// Emite o resultado como alerta e no console
alert('Seu saldo com o reajuste de 33,33% será de: ' + reajuste);
console.log('Seu saldo com o reajuste de 33,33% será de: ' + reajuste)