let dolar = 1;
let reais = 5.81;

let quantreal = prompt('Digite quantos reais você quer transformar em dólares: ')
quantreal = parseFloat(quantreal);

conversão = reais / quantreal;

alert(quantreal + ' reais equivalem à: ' + conversão + ' dólares');
