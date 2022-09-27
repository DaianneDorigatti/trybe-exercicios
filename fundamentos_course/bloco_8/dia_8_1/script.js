//a const abaixo é uma arrow function que recebe dois parâmetros (num1 e num2) e retorna a soma de (num1 + num):
//pra chamar a função dá o console.log(sum(10,5));

const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const multi = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;

//função que recebe outra função como parâmetro: foi criado uma função chamada calculator, passei o parâmetro (func) que é uma função, e que recebe 
//dois parâmetros (10,5).
const calculator = (func) => func(10, 5);
//Abaixo estamos invocando a nossa função calculator e ela espera que passamos o parâmetro, nesse caso o (func) que é uma função. Ele vai calcluar sempre 
//com os valores 10,5.
console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(multi));
console.log(calculator(div));

// ----------------------------------------------------------------------------
// Crie uma função que retorne a string 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!';

// Crie mais uma função que retorne a string 'Partiu dormir!!';

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const acordar = (frase1) => 'Acordando!!';
const cafe = (frase2) => 'Bora tomar café!!';
const dormir = (frase3) => 'Partiu dormir!!';

const doingThings = (func) => func(acordar);
console.log(doingThings(acordar));
console.log(doingThings(cafe));
console.log(doingThings(dormir));

// -------------------------------------------------------------------------------
// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = () => {
    const employees = {
      id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
console.log(newEmployees());