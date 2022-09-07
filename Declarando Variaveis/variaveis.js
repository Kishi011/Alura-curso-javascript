// variáveis var
// var - tanto faz a ordem em que se declara ela. Você pode escrever uma variavel e declará-la depois. 
// o var declara a variável globalmente, ou seja, ela fica disponível para todo o escopo do projeto.
// quando criamos uma variável sem atribuir um tipo a ela (var, const ou let), o node js automaticamente já interpreta a variável como var


// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;


// variáveis let
// só tem acesso à variavel depois de declarada, assim, ela não é "visível" dentro de blocos de códigos (por exêmplo o IF). Se atribuir um valor a uma variavel e depois declará-la como 'let' vai dar erro.
// usa-se o let por questões de segurança do código, já que o var acaba ficando "solto" dentro do código, a variável let não fica disponível fora do seu escopo.
// o let não pode ser acessado fora do método em que foi declarado.

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma == 'retangulo'){
//     area = altura * comprimento;
// }
// if(forma == 'triangulo'){
//     area = (altura * comprimento)/2;
// }
// console.log(area);


// variáveis const
// variáveis declaradas como const tem um valor constante, ou seja, uma vez declarada dentro do código não é possível alterar o seu valor.
// variáveis do tipo const precisam ter um valor atribuido na sua declaração.

// const forma = 'retangulo';
// const altura = 5;
// const comprimento = 7;

// // a area não pode ser declarada como const, pois posteriormente terá um valor atribuido à ela.
// let area;

// if(forma == 'retangulo'){
//    area = altura * comprimento;
// }
// if(forma == 'triangulo'){
//    area = (altura * comprimento)/2;
// }
// console.log(area);