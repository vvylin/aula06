// variáveis
// let, var e const

// 1. crie um programa que leia tres numeros e determine qual é o maior.

var n1 = 65
var n2 = 0
var n3 = 90

// and (&&)

if (n1 > n2 && n1 > n3) {
    console.log("O maior número é: " + n1)

} else if (n2 > n1 && n2 > n3) {
    console.log("O maior número é: " + n2)

} else if (n3 > n1 && n3 > n2) {
    console.log("O maior número é: " + n3)

}

/////////////////////////////////

// 2. crie um programa que leia um numero e verifique se ele esta entre 1 e 100.

var numero = 78
if (numero >= 1 && numero <= 100) { 
    console.log("O número está entre 1 e 100")
} else {
    console.log("O número NÃO está entre 1 e 100")
}