var num = prompt("insira um número")*1
var div15 = num % 15
var div5 = num % 5

if(div15 == 0) console.log("Sim 15")
else if(div5 == 0) console.log("Sim 5")
else console.log("Não")