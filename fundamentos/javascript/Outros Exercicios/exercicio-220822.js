// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let num = 1;
for (let i = 0; i <= 50; i+= 1){
    num += i;
}
console.log(num)


//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let num = 2;
let contador = 0;
for(let i = 2; i <= 150; i += 1){
    if(i % 3 === 0){
        contador += 1;
    }
}
if(contador === 50){
    console.log("Resolvemos")
} else {
    console.log(contador)
}


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado 
//no formato: "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "pedra";
let player2 = "pedra";
if(player1 === player2){
    console.log("empate");
}else if(player1 === "tesoura" && player2 === "papel"){
    console.log("O player 1 ganhou!")
    console.log(player1, player2);
}else if(player2 === "tesoura" && player1 === "papel"){
    console.log("O player 2 ganhou!")
    console.log(player2, player1);
}else if(player1 === "papel" && player2 === "pedra"){
    console.log("O player 1 ganhou!")
    console.log(player1, player2);
}else if(player2 === "papel" && player1 === "pedra"){
    console.log("O player 2 ganhou!")
    console.log(player2, player1);
}else if(player1 === "pedra" && player2 === "tesoura"){
    console.log("O player 1 ganhou!")
    console.log(player1, player2);
}else if(player2 === "pedra" && player1 === "tesoura"){
    console.log("O player 2 ganhou!")
    console.log(player2, player1);
}

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 16;
idade >= 18 ? console.log("A pessoa é maior de idade") : console.log("A pessoa é menor de idade");


// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let nomes = [{
    nome: "Carolzita",
    idade: 18
}, {
    nome: "Murilo",
    idade: 30
},{
    nome: "Baêta",
    idade: 16
}
]
let menor = Number.POSITIVE_INFINITY;
let nomeDaPessoa = “”;
for(let i = 0; i < nomes.length; i += 1){
    if(nomes[i].idade < menor){
        menor = nomes[i].idade;
        nomeDaPessoa = nomes[i].nome
    }
}
console.log(menor, nomeDaPessoa)

