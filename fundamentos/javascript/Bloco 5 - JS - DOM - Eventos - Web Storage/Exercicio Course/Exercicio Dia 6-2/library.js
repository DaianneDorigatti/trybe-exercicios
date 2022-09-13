// importa a biblioteca
let moment = require('moment')

//função que vê há quanto tempo o Brasil foi campeão:
let BrasilTetra = moment('17071994', 'DDMMYYYY');
let fromNow = BrasilTetra.fromNow();

console.log('Ouvimos o "É tetraaa" há: ' + fromNow);
