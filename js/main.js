"use strict";

// 1. Variables globales

const updateButton = document.querySelector(".js_button");
const selectMove = document.querySelector(".js_select_move");
const gameResult = document.querySelector(".js_game_result");
const moves = ["Piedra", "Papel", "Tijera"];
// 2. Funciones:

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function computerMove() {
  const randomNum = getRandomNumber(10);
  if (randomNum <= 3) {
    return moves[0];
  } else if (randomNum >= 6) {
    return moves[1];
  } else {
    return moves[2];
  }
}

function handleClickUpdate(event) {
  event.preventDefault();
  const userMove = selectMove.value;
  const compMove = computerMove();
  if (compMove === "Tijera" && userMove === "Tijera") {
    gameResult.innerHTML = "Empate";
  } else if (compMove === "Piedra" && userMove === "Tijera") {
    gameResult.innerHTML = "Gana computadora";
  } else if (compMove === "Papel" && userMove === "Tijera") {
    gameResult.innerHTML = "Gana usuario";
  } else if (compMove === "Tijera" && userMove === "Piedra") {
    gameResult.innerHTML = "Gana usuario";
  } else if (compMove === "Piedra" && userMove === "Piedra") {
    gameResult.innerHTML = "Empate";
  } else if (compMove === "Papel" && userMove === "Piedra") {
    gameResult.innerHTML = "Gana computadora";
  } else if (compMove === "Tijera" && userMove === "Papel") {
    gameResult.innerHTML = "Gana computadora";
  } else if (compMove === "Piedra" && userMove === "Papel") {
    gameResult.innerHTML = "Gana usuario";
  } else if (compMove === "Papel" && userMove === "Papel") {
    gameResult.innerHTML = "Empate";
  }
}

// 3. Código que se ejecuta cuando se carga la página
updateButton.addEventListener("click", handleClickUpdate);
