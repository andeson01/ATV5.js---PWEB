let nota1 = parseFloat (prompt ("Digite a sua primeira nota: "))
let nota2 = parseFloat (prompt ("Digite a sua segunda nota: "))
let nota3 = parseFloat (prompt ("Digite a sua terceira nota: "))

    let media = (nota1 + nota2 + nota3) / 3;

    alert('Sua média é: ' + media)
    console.log('Sua média é: ' + media);


if(media >= 7){
    alert('Aluno Aprovado!!')
} else if (media >= 5 && media < 7){
    alert('Aluno em Recuperação!!')
} else {
    alert('Aluno Reprovado!!')
}