import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here
  
let palo = ['♥', '♣', '♦', '♠'];
let numero = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
console.log(numero);
console.log(palo);

let paloAleatorio = palo[Math.floor(Math.random() * palo.length)];
console.log(paloAleatorio);

let numeroAleatorio = numero[Math.floor(Math.random() * numero.length)];
console.log(numeroAleatorio);

let icono1 = document.querySelector('.palo1');
let icono2 = document.querySelector('.palo2');
let numeroCarta = document.querySelector('#numero');

icono1.innerHTML = paloAleatorio;
icono2.innerHTML = paloAleatorio;
numeroCarta.innerHTML = numeroAleatorio;

if (paloAleatorio === '♥' || paloAleatorio === '♦') {
    icono1.style.color = 'red';
    icono2.style.color = 'red';
} else {
    icono1.style.color = 'black';
    icono2.style.color = 'black';
}

if (numeroAleatorio === '♥' || numeroAleatorio === '♦') {
    numeroCarta.style.color = 'red';

} else {
    numeroCarta.style.color = 'black';
}


};
