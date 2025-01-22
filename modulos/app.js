var pessoas = require( './commons/pessoas' );
var soma = require( './commons/Soma' );
var imposto = require( './commons/calculoImposto' );
var calculadora = require( './commons/calculadora' );


/* exporta a função pessoas */
gabriel = pessoas();

/* transforma em JSON a 'pessoa' */
console.log(JSON.stringify(gabriel));

/* exporta a função soma */
console.log(soma(2,2));

/* exporta a função imposto */
console.log(`valor do produto com imposto: ${imposto.adicionarTaxa(10)}`);
console.log(`valor do imposto: ${imposto.valor(10)}`);
console.log(`taxa do imposto: ${imposto.taxa}`);

console.log(`soma de 2 + 2: ${calculadora.soma(2,2)}`);
console.log(`subtração de 2 - 2: ${calculadora.subtracao(2,2)}`);
console.log(`multiplicação de 2 * 2: ${calculadora.multiplicacao(2,2)}`);
console.log(`divisão de 2 / 2: ${calculadora.divisao(2,2)}`);

