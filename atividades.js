// 1. Validação de Login Simples (&&)

var usuario = "admin"
var senha = "1234"

if (usuario == "admin" && senha == "1234") {
    console.log("Acesso permitido")
} else {
    console.log("Acesso negado")
}

/////////////////////////////

//2. Entrada Gratuita no Parque (||)

var usuario = 7

if (usuario <= 6 || usuario >= 60) {
    console.log("Você NAO pagará a entrada!");
} else {
    console.log("Você pagará a entrada!");
}

/////////////////////////////

//3. Verificação de Interruptor (!)

var LampadaAcesa = true

LampadaAcesa = !LampadaAcesa
console.log(LampadaAcesa)

/////////////////////////////

//4. Pode Dirigir? (&&)

var idade = 18;
var temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

/////////////////////////////

//5. Desconto no Cinema (||)

var dataSemana = "segunda-feira" 
var usuarioEstudante = true

if (dataSemana == "quarta-feira" || usuarioEstudante == true) {
    console.log("Parabéns, você tem desconto!")
} else {
    console.log("Sinto muito, não tem desconto.")
}

/////////////////////////////

//6. Alarme de Segurança (||)

var portaAberta = true
var janelaAberta = true

if (portaAberta == true || janelaAberta == true) {
    console.log("Alarme Disparado!")
} else {
    console.log("Está tudo seguro!")
}

/////////////////////////////

//7. Número no Intervalo (&&)

var numero = 10

if (numero >= 1 && numero <= 20) {
    console.log("Você está no intervalo!")
} else {
    console.log("Você NÃO está no intervalo!")
}

/////////////////////////////

//8. Aprovação Escolar Completa (&& e ||)

var nota = 9
var frequencia = 80
var trabalhoExtra = true

if ((nota >= 7 && frequencia >= 75) || (trabalhoExtra == true && frequencia >= 75)) {
    console.log("Você está aprovado!")
} else {
    console.log ("Você NÃO está aprovado!")
}

/////////////////////////////

// 9. Requisitos para Montanha-Russa (&& e !)

var alturaPessoa = 1.50
var idadePessoa = 10
var problemaCardiaco = false

if (alturaPessoa >= 1.50 && idadePessoa >= 12 && !problemaCardiaco) {
    console.log("Pode ir, boa diversão!")

} else {
    console.log("Sinto muito, não pode ir.")
}

/////////////////////////////

// 10. Regra de Frete Grátis (&&, || e !)

var valorCompra = 90
var membroVIP = true
var zonaRural = false

if (valorCompra >= 100 || membroVIP == true && !zonaRural) {
    console.log("Tem frete grátis para você!")
} else {
    console.log("Não tem frete grátis.")
}

/////////////////////////////

// 11. Sugestão de Vestuário

var temperatura = 20
var estaChovendo = true

if (temperatura < 15 || estaChovendo == true) {
    console.log("Leve um casaco!");
    } else {
    console.log("Vestuário livre.")
    } 


/////////////////////////////

// 12. Acesso à Piscina do Clube

var trajeAdequado = true
var exameMedico = true

if (trajeAdequado == true && exameMedico == true) {
    console.log("Pode entrar na piscina!")
} else {
    console.log("Não pode entrar na piscina.")
}

/////////////////////////////

// 13. Funcionamento da Loja 

var dataSemana = 2
var hora = 6

if ((dataSemana >= 1 && dataSemana <= 5) && (hora >= 8 && hora <= 18)) {
    console.log("A loja está aberta!")
} else {
    console.log("A loja está fechada.")
}   

///////////////////////////// 

// 14. Validação de Formulário

var email = "teste@gmail.com"
var termos = false

if (email != "" && termos == true) {
    console.log("Formulário válido")
} else {
    console.log("Formulário inválido")
}

/////////////////////////////

// 15. Vaga Preferencial no Estacionamento

var idade = 60
var credencial = false
var veiculo = "carro"

if (veiculo != "caminhao" && (idade >= 60 || credencial == true)) {
    console.log("Vaga permitida")
} else {
    console.log("Vaga não permitida")
}
