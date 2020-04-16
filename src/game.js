import Elf from './elf';
import { GAME_WIDTH, GAME_HEIGHT } from './settings';
class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    // this.elf = new Elf(this);
    this.monolith = new Image();
    this.monolith.onload = () => {
      this.drawMonolith();
    }
    this.monolith.src = './dist/assets/images/monolith/monolith.png';
  }
  
  drawMonolith() {
    this.ctx.drawImage(this.monolith, 380, 190, 200, 350);
  }
  
}

export default Game;