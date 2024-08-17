//Desafio 5: Conversão de Temperatura


function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32;  // Celsius para Fahrenheit
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;  // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}

let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);  // Saída esperada: 77
