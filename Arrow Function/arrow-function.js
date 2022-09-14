// arrow functions utilizam "=>"
// Arrow function surgiu no javascript junto com a versão de 2015
// ela não pode ser nomeada
// sempre é declarada como const

// declaração de função comum
function apresentacao(nome){
    return `Meu nome é ${nome}`;
}

// declaração de arrow functions
/**   nome da função - parametros - instruções*/
const apresentaArrow = nome => `Meu nome é ${nome}`; // faz a mesma coisa que a função apresentacao(), mas com menos linhas
const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de uma linha de instrução
// OBS: é preciso, nesse caso, abrir e fechar chaves. Diferentemente de quando a função possui só uma linha
const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10 ){
        return `somente números de 1 a 9`;
    } else{
        return num1 + num2;
    }
}

console.log(apresentaArrow("Vinicius")); // Meu nome é Vinicius
console.log(soma(5,6)); // 11
console.log(somaNumerosPequenos(8,2)); // 10
console.log(somaNumerosPequenos(15,26)); // somente números de 1 a 9

// Arrow function é um jeito rápido e curto de escrever funções
// tem vantagens quando o código é orientado à objetos