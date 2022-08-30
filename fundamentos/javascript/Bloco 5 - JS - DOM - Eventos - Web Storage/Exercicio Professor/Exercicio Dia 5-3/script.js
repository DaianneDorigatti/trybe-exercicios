
// // function magicFunction() {
// //   console.log('abracadabra!');
// // }


// // magicFunction();
// window.onload = function () {
//   console.log('abracadabra!');
// };
// // console.log(window.onload);


// console.log('teste');

// console.log('teste 2');

window.onload = function () {

    const botao = document.getElementById('start-race-btn');
    // console.log(botao);

    const car1 = document.querySelector('.car1');
    const car2 = document.querySelector('.car2');
    //para que os carros iniciem do lado esquerdo:
    car1.style.marginLeft = '0';
    car2.style.marginLeft = '0';

    //Vai resetar os carros quando a corrida acabar:
    function resetCars() {
        car1.style.marginLeft = '0';
        car2.style.marginLeft = '0';
    }

    botao.addEventListener('click', function () {
        // alert('Deu bom!');
        // console.log(event.target);
        // event.target.innerText = 'Clicado!';

        // console.log(car1,car2);

        //Nesse caso, usamos o parseInt para que transforme o valor em número//
        //pois senão ele vem com o 'px' e não consegue somar com os demais valores.
        //O Math.random vai sortear um número aleatório de 0 a 1, para os carros irem avançando.
        //O valor aleatório será multiplicado por 100 por caausa do tamanho da página, e depois
        //será somado com a string 'px'.
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';

        //Nesse if verifica se a margem do carro 1 é maior que a margem da página toda,
        //pois significa que chegou ao final e o carro 1 ganha. 
        //Reseta os carros.
        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert('Carro 1 ganhou!');
            resetCars();
        }
        //Nesse if verifica se a margem do carro 1 é maior que a margem da página toda,
        //pois significa que chegou ao final e o carro 1 ganha. 
        //Reseta os carros.

        if (parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert('Carro 2 ganhou!');
            resetCars();
        }




        // console.log(Math.random() * 100);

        // index += 1
        // somatorio = somatorio + numero
        // +=

    });

};