"use strict";

// 1. Variables globales

const updateButton = document.querySelector(".js_button");
const selectMove = document.querySelector(".js_select_move");
const gameResult = document.querySelector(".js_game_result");
const moves = ["Piedra", "Papel", "Tijera"];
let userCounter = 0;
let compCounter = 0;
const player = document.querySelector(".js_player");
const computer = document.querySelector(".js_computer");

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
    tie();
  } else if (compMove === "Piedra" && userMove === "Tijera") {
    computerWins();
  } else if (compMove === "Papel" && userMove === "Tijera") {
    userWins();
  } else if (compMove === "Tijera" && userMove === "Piedra") {
    userWins();
  } else if (compMove === "Piedra" && userMove === "Piedra") {
    tie();
  } else if (compMove === "Papel" && userMove === "Piedra") {
    computerWins();
  } else if (compMove === "Tijera" && userMove === "Papel") {
    computerWins();
  } else if (compMove === "Piedra" && userMove === "Papel") {
    userWins();
  } else if (compMove === "Papel" && userMove === "Papel") {
    tie();
  }
}

function tie() {
  gameResult.innerHTML = "Empate";
}
function userWins() {
  gameResult.innerHTML = "Gana usuario";
  userCounter++;
  player.innerHTML = "Jugador: " + userCounter;
}
function computerWins() {
  gameResult.innerHTML = "Gana computadora";
  compCounter++;
  computer.innerHTML = "Computadora: " + compCounter;
}

// 3. Código que se ejecuta cuando se carga la página
updateButton.addEventListener("click", handleClickUpdate);
