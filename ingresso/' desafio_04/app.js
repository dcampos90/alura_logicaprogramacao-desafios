//Desafio 4: Verificação de Números Pares e Ímpares



function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}


let numero = 7;
let resultadoParOuImpar = verificarParOuImpar(numero);
console.log(resultadoParOuImpar); 
