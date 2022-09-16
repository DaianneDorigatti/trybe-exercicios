//Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
//Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', //'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.

let estado = 'aprovada';

switch (estado) {
    case "aprovada":
        console.log("Você foi aprovado(a)");
        break;
    case "lista":
        console.log("Voce está na lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovado(a)");
        break;
    default:
        console.log("Não se aplica");
        
}        
