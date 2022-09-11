// console.log(apresentacao());
// console.log(apresenta('Vinicius'));

// declaração de função

function apresentacao(){
    return `Olá mundo!`;
}

// expressão de função

// OBS: Funções declaradas como "const" ou "let" não conseguem ser chamadas antes da sua declaração, a não ser que ela seja declarada como "var".
// OBS2: É importante declarar variáveis que contém funções como "const" para não correr o risco de sobrescrever a variável.
const apresenta = function(nome){
    return `Olá, eu sou ${nome}. Essa função está guardada em uma variável!`
}

// console.log(apresenta('Vinicius'));


// curiosidade: também é possível armazenar essas funções dentro de arrays
const funcao = [0,1,2, function(){
    return 3;
}];

// console.log(funcao[3]());