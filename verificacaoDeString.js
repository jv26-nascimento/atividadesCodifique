var nome = prompt("Insira um nome de usuário")

for(var tamanhoDoNome = nome.length; tamanhoDoNome > 10;){
  alert("Nome de usuário muito grande! O Tamanho máximo é de 10 caracteres. Por favor insira um nome válido")
  nome = prompt("Insira outro nome de usuário")
  tamanhoDoNome = nome.length
}

console.log( "Obrigado, " + nome + ", por criar uma conta no TikTok!")