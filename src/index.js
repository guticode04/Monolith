import Game from "./game";
import { GAME_WIDTH, GAME_HEIGHT } from "./settings";

document.addEventListener("DOMContentLoaded", ()  => {
  const canvas = document.getElementById("monolithcanvas");
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  const ctx = canvas.getContext("2d");
  const game = new Game(canvas, ctx);
  //const gameLoop = new GameLoop(game, canvas);
})