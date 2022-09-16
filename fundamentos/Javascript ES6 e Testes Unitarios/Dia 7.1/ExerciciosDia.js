// Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Primeiro passo: Modifique a estrutura da função para que ela seja uma arrow function.

const testingScope = (escopo) => { // Alterando estrutura para utilizar arrow function
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
};

testingScope(true);

// Segundo passo: Altere as concatenações para template literals.

const testingScope = escopo => {
  if (escopo === true) { 
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`; // Substituição das concatenações de strings para template literals
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui? :O`); // Substituição das concatenações de strings para template literals
}

testingScope(true);

// Altere a variável do tipo var, ifScope para let e elseScope, para const.

// Dessa forma elas não vazam o escopo do if e else.

const testingScope = (escopo) => { 
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'; // Alterando o tipo da variável para const
    ifScope = ifScope + ' ótimo, fui utilizada no escopo!';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)'; // Alterando o tipo da variável para const
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui? :O`);
};

testingScope(true);

// Retire o console.log que está fora do if/else

// Agora que as variáveis ifScope e elseScope foram alteradas para respeitarem o escopo, você deve retirar o console.log que está fora do if/else para que seu código consiga ser executado sem nenhum erro, pois essas variáveis não são mais acessíveis fora de seu escopo.

const testingScope = (escopo) => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

// Crie uma função que retorne um array em ordem crescente.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {

// // Seu código aqui.

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// Primeiro passo: Reatribua os valores de cada posição do array oddsAndEvens, fazendo com que os números fiquem ordenados de forma crescente.

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const sortOddsAndEvens = () => { // Função criada para ordenar os valores do array oddsAndEvens de forma crescente
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
    return oddsAndEvens;
  };
  console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// Segundo passo: Armazene o valor retornado pela função sortOddsAndEvens em uma variável.

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
    return oddsAndEvens;
  };
  const sortedArray = sortOddsAndEvens(); // Armazenando o valor retornado pela função em uma variável
  console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// Terceiro passo: Agora você deve utilizar template literals para exibir a mensagem desejada.

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7; 
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
    return oddsAndEvens;
  };
  const sortedArray = sortOddsAndEvens();
  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // Utilizando template literals para exibir a mensagem desejada

// Bônus array.sort()

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);
array.sort com sort em uma linha.
Copiar
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);




