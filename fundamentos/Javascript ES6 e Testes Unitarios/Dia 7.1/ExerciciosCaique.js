// HOSTING
// let nome;
// nome = 'Caique'; 
// console.log(nome);

// MUTABILIDADE

// const nome = 'Caique';

// nome = 'Thalles';


// const array = [1, 2, 3];
// array.push(4);
// console.log(array);

// array = [1,2]; 



// const pessoa = {
//   nome: 'Caique',
//   idade: '40'
// }

// pessoa.nome = 'Thalles';

// console.log(pessoa);

//FUNCSCOPE

// var x = 3;

// function func(bool) {
//   let x;
//   if (bool) {
//      x = 48; 
//   }

//   return x; 
// }

// console.log(func(true)); 
// console.log(func(false)); 

//ARROW FUNTIONS


// Função nomeada
 
// function greeting() {
//  return 'Bom dia!';
// }

// console.log(greeting());

// Função anônima

// buttonStartRace.addEventListener('click', function(){
//   console.log('O botão foi clicado');
// });
 
// Arrow 'nomeada'

// const greeting = () => {
//  return 'Bom dia!';
// }
 
// console.log(greeting());
// console.log(greeting);


// Arrow anônima

// buttonStartRace.addEventListener('click', () => {
//   return 'Bom dia!';
// });


// Refatorando sem argumento




// Refatorando com argumento

// const greeting = (nome) => 'Bom dia!' + nome;
 
// console.log(greeting('Flavia'));


// Com dois argumentos

// const greeting = (nome, sobrenome) => 'Bom dia!' + nome + ' ' + sobrenome + '!';
 
// console.log(greeting('Flavia', 'Pereira'));

//TEMPLATE LITERALS

// const message =
//   'Essa é minha \n' +
//   '\'primeira\' mensagem';

// console.log(message);


// Solução - Cold Call

// const message2 = `Essa é a minha 
//   'primeira' mensagem`;

// console.log(message2);


// Outros exemplos

// const Greeting = (nome,sobrenome) => `Bom dia, ${nome} ${sobrenome}!`;

// console.log(Greeting('Caique', 'Coelho'));


// const sum = (num1, num2) => `O resultado da soma é ${num1 + num2}`;

// console.log(sum(5,5));

//TERNARY OPERATOR

// 'condicão' ? 'retorno se verdadeira' : 'retorno se falsa';

// Crie uma arrow function que recebe uma idade como entrada e retorne
// uma string indicando se a pessoa pode dirigir ou não. Use operador ternário
// e template literals.

// const exercicio = (idade) => idade >= 18 ? `Pode dirigir, pois a idade é ${idade}` : `Não pode dirigir, pois a idade é ${idade}`;



// console.log(exercicio(17));