var contagem = Number(prompt("Quantos números quer somar?"))
var num
var total = 0
for(var i = 1; i <= contagem; i++){
  num = Number(prompt("Coloca um número aí"))
  total += num
}
console.log(total)