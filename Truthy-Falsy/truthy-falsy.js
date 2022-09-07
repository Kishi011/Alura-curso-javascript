// truthy e falsy

// são variáveis que podem ter um comportamento similar ao do tipo booleano
// alguns valores de variáveis podem ser interpretados como true ou false pelo javaScript ou outras linguagens. Como por exemplo: 0 e 1
// 0 -> false       1 -> true

console.log(0 == false);
console.log(1 == true);

// strings vazias também são consideradas como false
console.log('' == false);

console.log('\n'); // pula uma linha

if(1 /*true*/){
    console.log('acessou');
}
if(0 /*false*/){
    console.log('não acessou');
}

console.log('\n'); // pula uma linha

// null e undefined

// null -> quando uma variável declarada tem um valor vazio
let variavelNull = null;

// undefined -> quando uma variável foi declarada mas não foi atribuido um valor à ela
let variavelUndefined;

console.log(variavelNull);
console.log(variavelUndefined);

console.log('\n'); // pula uma linha

// typeof
//  retorna o tipo que está sendo guardado dentro da variável

let numero = 3;
let texto = 'vini';

console.log(typeof numero);
console.log(typeof texto);

console.log(typeof variavelNull); // retorna o tipo object. Era para retornar o tipo "null", mas acabou sendo um bug. Até hoje não foi corrigido, pois caso contrário, acabaria por quebrar muitos códigos.
console.log(typeof variavelUndefined);