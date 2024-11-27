    let tempFahrenheit = prompt('Digite a sua temperatura em Fahrenheit para conversão em celsius: ')
    tempFahrenheit = parseFloat(tempFahrenheit);

        conversão = (tempFahrenheit - 32) * 5 / 9;

    let tempCelsius = conversão;

    alert('A temperatura de ' + tempFahrenheit + ' Fahrenheit, equivalem à: ' + tempCelsius + '°C');
    console.log('A temperatura de ' + tempFahrenheit + ' Fahrenheit, equivalem à: ' + tempCelsius + '°C');        


