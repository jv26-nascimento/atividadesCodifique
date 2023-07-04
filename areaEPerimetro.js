//Valor para arredondar os resultados

var arredondar = parseInt(prompt("Para quantas casas quer arredondar os resultados?"));

if(isNaN(arredondar))
  {
    console.log("O valor inserido para arredondar não é válido, então será utilizado 0")
  }

//Área e perímetro do quadrilátero

var baseQuadrilatero = parseFloat(prompt("Insira o valor da base do quadrilátero (em todos os valores fracionários use o ponto (.) ):"));
var alturaQuadrilatero = parseFloat(prompt("Insira o valor da altura do quadrilátero:"));

var areaQuadrilatero = baseQuadrilatero * alturaQuadrilatero;
var perimetroQuadrilatero = (baseQuadrilatero + alturaQuadrilatero) * 2;

if(isNaN(areaQuadrilatero))
  {
    console.log("Insira valores válidos nas medidas do quadrilátero")
  }
else
  {
    console.log("Área do quadrilátero: " + areaQuadrilatero.toFixed(arredondar) + "\nPerímetro do quadrilátero: " + perimetroQuadrilatero.toFixed(arredondar));
  }

//Área e perímetro do triângulo equilátero

var ladoTriangulo = parseFloat(prompt("Insira o valor do lado do triângulo equilátero:"));

var areaTriangulo = ladoTriangulo ** 2 * Math.sqrt(3) / 4;
var perimetroTriangulo = ladoTriangulo * 3;

if(isNaN(areaTriangulo))
   {
     console.log("Insira um número válido para a medida do lado do triângulo equilátero")
   }
else
  {
    console.log("Área do triângulo equilátero: " + areaTriangulo.toFixed(arredondar) + "\nPerímetro do triângulo equilátero: " + perimetroTriangulo.toFixed(arredondar));
  }

//Área e circunferência do circulo

var raioCirculo = parseFloat(prompt("Insira o valor do raio do círculo:"));

var areaCirculo = Math.PI * raioCirculo ** 2;
var circunferenciaCirculo = 2 * Math.PI * raioCirculo;

if(isNaN(raioCirculo))
  {
    console.log("Insira um valor válido para o raio do círculo")
  }
else
  {
    console.log("Área do círculo: " + areaCirculo.toFixed(arredondar) + "\nCircunferência do círculo: " + circunferenciaCirculo.toFixed(arredondar));
  }
