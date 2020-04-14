import Game from "./game";

document.addEventListener("DOMContentLoaded", ()  => {
  const canvas = document.getElementById("monolithcanvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(canvas, ctx);
})