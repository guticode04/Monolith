import Game from "./game";
import { GAME_WIDTH, GAME_HEIGHT } from "./settings";

document.addEventListener("DOMContentLoaded", ()  => {
  const canvas = document.getElementById("monolithcanvas");
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  const ctx = canvas.getContext("2d");
  const game = new Game(canvas, ctx);
  // const gameLoop = new GameLoop(game, canvas);
  // const bcanvas = document.getElementById("background-layer");
  // const gcanvas = document.getElementById("game_layer");
  // const ucanvas = document.getElementById("ui_layer");
  // bcanvas.width = GAME_WIDTH;
  // bcanvas.height = GAME_HEIGHT;
  // gcanvas.width = GAME_WIDTH;
  // gcanvas.height = GAME_HEIGHT;
  // ucanvas.width = GAME_WIDTH;
  // ucanvas.height = GAME_HEIGHT;

})