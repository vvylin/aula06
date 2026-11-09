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

/////////////////////////////

// 3. crie um programa que leia uma letra e retorne se é vogal ou consoante
// a e i o u

var letra = "z"

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("A letra é uma vogal!")
} else {
    console.log("A letra é uma consoante!")
}

/////////////////////////////

// 4. faça um programa que leia um numero e verifique se ele esta fora do range de 1 a 20.

var numero = 33

if ( numero < 1 || numero > 20) {
    console.log("você está fora do range de 1 a 20")
} else {
    console.log("você está dentro do range de 1 a 20")
}

// not (!)

var numero = 33

if (!(numero < 1 || numero > 100)) {
    console.log("você está entre 1 a 100")
} else {
    console.log("você está fora de 1 a 100")
}

/////////////////////////////

var teste = false

console.log(!teste) 
console.log(!-1)
console.log(!(1 == 1))

