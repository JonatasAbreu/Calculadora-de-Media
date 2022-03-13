function media() {
let NotaDoPrimeiroBimestre = parseFloat(document.getElementById("media1").value)
let NotaDoSegundoBimestre = parseFloat(document.getElementById("media2").value)
let NotaDoTerceiroBimestre = parseFloat(document.getElementById("media3").value)
let NotaDoQuartoBimestre = parseFloat(document.getElementById("media4").value)
let NotaFinal = (NotaDoPrimeiroBimestre + NotaDoSegundoBimestre + NotaDoTerceiroBimestre + NotaDoQuartoBimestre) / 4
console.log(NotaDoSegundoBimestre)
let notaFixada = NotaFinal.toFixed(1)

let mediaFinal = document.getElementById("valorMediaFinal")

let valorMediaFinal  =  notaFixada
if(valorMediaFinal < 5){
    mediaFinal.innerHTML = "Sua Média foi " + valorMediaFinal + " Você esta Reprovado"
}
if(valorMediaFinal > 5) {
    mediaFinal.innerHTML = "Sua Média foi " + valorMediaFinal + " Você esta Aprovado" 
}

}


// ADICONA INPUT PARA PEGAR CADA NOTA, DEPOIS SOMAR AS NOTAS E FAZER APARECER NA TELA
// MONSTRAS SE O ALUNO FOI APROVADO OU NÃO