// const --> declara uma constante, o valor dela não se pode altera;
const texto = 'Hello world!';
// \u + código = alguma letra do banco de dados do conjunto de caracteres do Unicode (UTF)
const letra = '\u0024'; // $

const n1 = 2;
const n2 = 4;

console.log(texto);
console.log(letra);

// com template strings é possível fazer a quebra automática de linha com o pular de linha no editor de códigos
// ele também conta o espaçamento
// para isso, o texto deve estar entre ` `. Para inserir algum valor basta fazer ${valor}
// isso torna escrever o código muito mais fácil, além de ficar mais legível.
console.log(`
Testando template strings
${n1 + n2}
Isso foi uma template string`);

const string1 = 'Testando mais template strings';
const string2 = 'o texto deve estar entre ` `. Para inserir algum valor basta fazer ${valor}';
const string3 = 'Nesse caso, para mostrar as strings precisamos colocá-las dentro de ${}';

console.log(`
${string1}
    ${string2}
        ${string3}`);

const nomeCompleto = `Vinicius Mulinari Stuani`;
console.log(nomeCompleto);