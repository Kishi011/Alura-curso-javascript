// o operador ternário funciona como se fosse um if, deixando o código muito mais simplificado

const idade = 18;

// usando o if para testar a condição
if(idade >= 18){
    console.log('pode beber');
} else{
    console.log('não pode beber');
}

// usando o operador ternário -> ?

//           condição    saída 1(true)  saída 2(false)
console.log((idade>=18)? "pode beber":"não pode beber");
// ele primeiramente testa a condição e depois retorna um valor de verdadeiro ou falso
// caso seja true ele retorna o primeiro valor informado.
// caso seja false ele retorna o segundo valor informado.