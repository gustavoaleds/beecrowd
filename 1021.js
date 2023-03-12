var input = require('fs').readFileSync('stdin', 'utf8');

valor = input;

let parteInteira = Math.floor(valor); // Separa a parte inteira do valor
let parteDecimal = valor - parteInteira; // Separa a parte decimal do valor

const notas = [100, 50, 20, 10, 5, 2]; // Define as notas disponíveis
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]; // Define as moedas disponíveis

let notasNecessarias = []; // Array para armazenar a quantidade de notas necessárias
let moedasNecessarias = []; // Array para armazenar a quantidade de moedas necessárias

// Calcula a quantidade de notas necessárias
for (let i = 0; i < notas.length; i++) {
    let quantidade = Math.floor(parteInteira / notas[i]);
    notasNecessarias.push(quantidade);
    parteInteira = parteInteira % notas[i];
}

// Calcula a quantidade de moedas necessárias
for (let i = 0; i < moedas.length; i++) {
    let quantidade = Math.floor(parteDecimal / moedas[i]);
    moedasNecessarias.push(quantidade);
    parteDecimal = parteDecimal % moedas[i];
}

// Exibe a quantidade de notas e moedas necessárias
console.log("NOTAS:");
for (let i = 0; i < notasNecessarias.length; i++) {
    console.log(`${notasNecessarias[i]} nota(s) de R$ ${notas[i].toFixed(2)}`);
}

console.log("MOEDAS:");
for (let i = 0; i < moedasNecessarias.length; i++) {
    console.log(`${moedasNecessarias[i]} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
}