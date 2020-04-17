import Elf from './elf';
import Blast from './blast';
import Troll from './trolls';
import { 
  MON_WIDTH, 
  MON_HEIGHT,
  MON_POS_X,
  MON_POS_Y
} from './settings';
// import * as Settings from './settings';
class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.elf = new Elf(this);
    this.blast = new Blast(this);
    this.troll = new Troll(this);
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
    this.blast.drawBlast();
    this.troll.animateTroll();
  }

  addTrolls() {

  }

  processEnergyBlast() {

  }
  
  createEnergyBlast() {

  }

  chargeEnergyBlast() {

  }

  
  checkEnergyBlastCollision() {
    
  }
  
  checkElfCollision() {
    
  }

  stopChargingEnergyBlast() {

  }

  startGame() {

  }

  setupGameControls() {

  }

  toggleSound() {

  }

  toggleDifficulty() {

  }

  setDifficulty() {
    //set troll realease interval
    //set troll health
    //set troll speed
    //set energy blast power
  }

  updateScore() {

  }

  updateNumKills() {

  }




}

export default Game;