alert("Será tu o capaz de acertar o número oculto?")
var num = prompt("Digite um número aleatório e teste tuas capacidades")

while(num != -1){
  alert("Fracassaste! Tente novamente!")
  num = prompt("Digite um número aleatório e teste tuas capacidades")
}

console.log("Parabéns, o número oculto era -1! Impressionaste-me!")