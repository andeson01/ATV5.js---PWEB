let valor = parseFloat(prompt ('Digite o valor dos produtos: '));

let lucro;

    if (valor < 20) {
        lucro = 0.45;
    } else {
        lucro = 0.30;
    }

    alert('O valor do produto é: ' + valor);
    let valorVenda = valor * (1 + lucro);

            alert('O valor da venda com lucros é: ' + valorVenda);