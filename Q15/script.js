let idadeNadador = parseFloat(prompt('Digite a idade do nadador: '))

if(idadeNadador >= 18){
    alert('Esse nadador está na categoria: Adulto')
} else if (idadeNadador >= 14){
    alert('Esse nadador está na categoria: Juvenil')
} else if (idadeNadador >= 9){
    alert('Esse nadador está na categoria: Infantil')
} else {
    alert('Esse nadador está na categoria: Mirim')
}