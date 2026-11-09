// var, let e const


const NOME_COMPLETO= "Isabella Munhoz F. Lira"
let variaveis_temporarias = 8
var variaveis_globais = 0

if (1 ==1) {
    var numero = 8
 console.log(numero)

 numero = 16
 console.log(numero)

}

console.log(NOME_COMPLETO)


/////////////////////////////

// o meu codigo de IF/ELSE trnsformando em AND (&&)

// if (idadeUsuario>=18) {
//   console.log("O usuario pode dirigir!")
// } else {
//   console.log("Desculpa, você ainda não pode dirigir!")
// } 

var idade = 18;
var temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

/////////////////////////////

// transformando em OR (||)

var idade = 20;
var temCarteira = false; 
// vai dar o resultado de "Pode dirigir!", pois a idade é maior que 18, msm não tendo carteira.

if (idade >= 18 || temCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

/////////////////////////////

// o meu codigo de IF/ELSE trnsformando em AND (&&)

// var n1 = 7
// var n2 = 6
// var n3 = 8
// var nomeUsuario = "Bella"
// var media = (n1 + n2 + n3) / 3

//  if (media >= 7) {
//    console.log(nomeUsuario + ", você foi aprovado(a)!")
// } else {
//    console.log(nomeUsuario + ", você foi reprovado(a).")
// } 

var n1 = 7
var n2 = 6
var n3 = 8
var nomeUsuario = "Bella"
var media = (n1 + n2 + n3) / 3  

if (media >= 7 && nomeUsuario == "Bella") {
  console.log(nomeUsuario + ", você foi aprovado(a)!")
} else {
    console.log(nomeUsuario + ", você foi reprovado(a).")
}

/////////////////////////////

// transformando em OR (||)

var n1 = 7 
var n2 = 6
var n3 = 8
var nomeUsuario = "Bella"
var media = (n1 + n2 + n3) / 3  

if (media >= 7 || nomeUsuario == "Bella") {
  console.log(nomeUsuario + ", você foi aprovado(a)!")
} else {
    console.log(nomeUsuario + ", você foi reprovado(a).")
}

/////////////////////////////

// o meu codigo de IF/ELSE trnsformando em AND (&&)

// var n1 = 50
// var n2 = 9
// var n3 = 20

// if (n1 > n2)
//     if (n1 > n3) {
//     console.log("O primeiro número é o maior")
// } else if (n2 > n1)
//     if (n2 > n3) {
//     console.log("O segundo número é o maior")
// } else if (n3 > n2)
//     if (n3 > n1) {
//     console.log("O terceiro número é o maior")
// }

var n1 = 5
var n2 = 9
var n3 = 20

if (n1 > n2 && n1 > n3) {
    console.log("O primeiro número é o maior")
} else if (n2 > n1 && n2 > n3) {
    console.log("O segundo número é o maior")
}   else if (n3 > n2 && n3 > n1) {
    console.log("O terceiro número é o maior")
}

/////////////////////////////

// transformando em OR (||)

var n1 = 5
var n2 = 9
var n3 = 20

if (n1 > n2 || n1 > n3) {
    console.log("O primeiro número é o maior")
}   else if (n2 > n1 || n2 > n3) {
    console.log("O segundo número é o maior")
}   else if (n3 > n2 || n3 > n1) {
    console.log("O terceiro número é o maior")
}

