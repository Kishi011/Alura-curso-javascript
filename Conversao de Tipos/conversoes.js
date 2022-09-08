// tipos de dados
// booleanos

// conversão implícita
// permite que um tipo de dado seja convertido em outro
// exêmplo
// número -> string
// string -> número

let numero = 456;
let numeroString = '456';

console.log(numero == numeroString); // retorna true
console.log(numero === numeroString); // retorna false
// OBS: '==' compara o valor dentro das variáveis. '===' compara não só o valor como o tipo das variáveis também.

console.log(numero + numeroString); // soma entre tipo number e tipo string transfora tudo em string e concatena as variaveis.
// retorna '456456'

// conversão explícita
// função Number() -> transforma string em número.
// função String() -> transforma número em string. Também pode ser usado com booleanos para transformar 'false' ou 'true' em string.

console.log(numero + Number(numeroString)); // transfoma numeroString em número e soma com número
// retorna '912'

// outro método de conversão para string é utilizar o toString()

let usuarioLogado = true;
console.log('O usuário está logado? ' + String(usuarioLogado));
// retorna 'O usuário está logado? true'

// converter um tipo de variável em número também pode ser feito colocando o operador '+' antes da variável

let altura = '4';
let largura = '5';

console.log(+ largura * + altura);
// retorna 20

let boolean = true

console.log(+ boolean);
// retorna 1 -> true