let numero = parseFloat(prompt('Digite um número para verificar se é positivo ou negativo: '))
    
    if(numero == 0){
        alert('Você digitou o zero.')
    }
    if(numero > 1){ 
        alert('Você digitou um número positivo.')
    }else {
        alert('Você digitou um número negativo.')
    }