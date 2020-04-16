import Elf from './elf';
import { 
  MON_WIDTH, 
  MON_HEIGHT,
  MON_POS_X,
  MON_POS_Y
} from './settings';
class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.elf = new Elf(this);
    this.monolith = new Image();
    this.monolith.onload = () => {
      this.drawMonolith();
    }
    this.monolith.src = './dist/assets/images/monolith/monolith.png';
    this.draw();
  };
  
  drawMonolith() {
    this.ctx.drawImage(this.monolith, MON_POS_X, MON_POS_Y, MON_WIDTH, MON_HEIGHT);
  };

  // draw everything on canvas
  draw() {
    this.elf.drawElf();
  }
  
}

export default Game;