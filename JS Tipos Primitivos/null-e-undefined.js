// os tipos null e undefined são tipos especiais de variáveis.

let valor1 = null; // o null atribui um "valor" nulo à uma variável, representando uma ausência de valor.
let valor2; // se somente declararmos uma variável sem atribuir um valor à ela, ela será tida como "undefined".
            // também representa ausência de valor, mas é diferente do null.

console.log(valor1);    // null
console.log(valor2);    // undefined

console.log(null == undefined);     // true
console.log(null === undefined);    // false

// undefined costuma ser uma ausência de valor inesperada, causada por um bug ou erro no código.
// null é uma ausência de valor já esperada pelo programa.