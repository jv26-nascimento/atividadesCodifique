var frequentava = prompt("Você frequentava a mercearia do seu Armênio? (Responda S para sim ou N para não)")
if(frequentava == "S"){
  frequentava = true
}
else if(frequentava == "N"){
  frequentava = false
}

var brigou = prompt("Você possuía algum desentendimento com o seu Armênio?(Responda S para sim ou N para não)")
if(brigou == "S"){
  brigou = true
}
else if(brigou == "N"){
  brigou = false
}

var reconheceu = prompt("Você reconhece o carro submerso na lagoa?(Responda S para sim ou N para não)")
if(reconheceu == "S"){
  reconheceu = true
}
else if(reconheceu == "N"){
  reconheceu = false
}

var encontrou = prompt("Você se encontrou com o seu Armênio nos últimos 2 dias?(Responda S para sim ou N para não)")
if(encontrou == "S"){
  encontrou = true
}
else if(encontrou == "N"){
  encontrou = false
}

if(frequentava == false && encontrou == true){
  console.log("Você é um suspeito")
}
else if(reconheceu == true || encontrou == true){
  console.log("Você é um suspeito")
}
else if(brigou == false){
  console.log("Você é aparentemente inocente")
}
else{
  console.log("Você é um suspeito")
}