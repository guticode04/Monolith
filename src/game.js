import Elf from './elf';
class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    // this.elf = new Elf(this);
    this.monolith = new Image();
    this.monolith.src = './dist/assets/images/monolith/monolith.png';
  }

  drawMonolith() {
    this.ctx.drawImage(this.monolith, 0, 0, 100, 250);
  }
  
  
}

export default Game;