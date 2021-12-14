"use strict";

// 1. Variables globales

const updateButton = document.querySelector(".js_button");
const selectMove = document.querySelector(".js_select_move");
const gameResult = document.querySelector(".js_game_result");
const arr3 = ["Piedra", "Papel", "Tijera"];
// 2. Funciones:

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleClickUpdate(event) {
  event.preventDefault();
}

// 3. Código que se ejecuta cuando se carga la página
updateButton.addEventListener("click", handleClickUpdate);
