var idade = prompt("Digites tua idade") * 1

if(isNaN(idade)){
  console.log("Isto não é número, quero número")
}
else if (idade < 14){
  console.log("És criança, brinque")
}
else if(idade < 20){
  console.log("És adolescente, faça amizades")
}
else if(idade < 25){
  console.log("És jovem-adulto, ainda tens muito vigor")
}
else if(idade < 60){
  console.log("És adulto, tu cresceste forte")
}
else if(idade < 150){
  console.log("És idoso, ajude os jovens a viverem bem como tu")
}
// else da zueira kk foi mal aew
else{
  console.log("Meus Deus, mais de 150 anos! Tu és forte!")
}