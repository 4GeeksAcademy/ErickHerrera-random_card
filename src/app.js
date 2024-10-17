/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector(".boton").addEventListener("click", generarCarta);
  generarCarta();
};

function generarCarta() {
  const palos = ["♠", "♥", "♦", "♣"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function numeroAleatorio(max) {
    return Math.floor(Math.random() * max);
  }

  const paloIndex = numeroAleatorio(4);
  const numeroIndex = numeroAleatorio(13);

  const simboloArriba = document.querySelector(".simbolo-arriba");
  const simboloAbajo = document.querySelector(".simbolo-abajo");
  const numeroCentro = document.querySelector(".numero");

  const palo = palos[paloIndex];
  const numero = numeros[numeroIndex];

  simboloArriba.textContent = palo;
  simboloAbajo.textContent = palo;
  numeroCentro.textContent = numero;

  if (palo === "♥" || palo === "♦") {
    simboloArriba.classList.add("rojo");
    simboloAbajo.classList.add("rojo");
    numeroCentro.classList.add("rojo");
    simboloArriba.classList.remove("negro");
    simboloAbajo.classList.remove("negro");
    numeroCentro.classList.remove("negro");
  } else {
    simboloArriba.classList.add("negro");
    simboloAbajo.classList.add("negro");
    numeroCentro.classList.add("negro");
    simboloArriba.classList.remove("rojo");
    simboloAbajo.classList.remove("rojo");
    numeroCentro.classList.remove("rojo");
  }
}
