//noprotect

var num = prompt("Digite um número (inteiro e positivo por favor)") * 1;

while(num < 100){
  var numExtra = prompt("Digite mais um...") * 1;
  num += numExtra;
}

console.log("Soma de tudo isso = " + num);