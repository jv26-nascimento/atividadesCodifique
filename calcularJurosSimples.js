var descobrir = prompt("O que descobrir? Insira 'J' para juros, 'C' para capital, 'I' para taxa ou 'T' para tempo")

var jurosC = false
var capitalC = false
var taxaC = false
var tempoC = false

if (descobrir == "J"){
  jurosC = true
} else if (descobrir == "C"){
  capitalC = true
} else if (descobrir == "I"){
  taxaC = true
} else if (descobrir == "T"){
  tempoC = true
}

alert("Insira a seguir cada valor, 0 no caso do valor a ser descoberto. Em decimais, use ponto '.'.")

var juros = prompt("Insira o valor - Juros")
var capital = prompt("Insira o valor - Capital")
var taxa = prompt("Insira o valor - Taxa")
var tempo = prompt("Insira o valor - Tempo")
var valor = 0


if (jurosC == true){
    juros = capital * taxa * tempo
    console.log ("Juros = " + juros)
  }
if (capitalC == true){
    valor = taxa * tempo
    capital = juros / valor
    console.log ("Capital = " + capital)
  }
if (taxaC == true){
    valor = capital * tempo
    taxa = juros / valor
    console.log ("Taxa = " + taxa)
  }
if (tempoC == true){
    valor = capital * taxa
    tempo = juros / valor
    console.log("Tempo = " + tempo)
  }