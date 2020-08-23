import { 
  MON_WIDTH, 
  MON_HEIGHT,
  MON_POS_X,
  MON_POS_Y
} from './settings';
import Elf from './elf';
import Blast from './blast';
import Troll from './trolls';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    // this.blast = new Blast(ctx);
    this.elf = new Elf(ctx);
    // this.troll = new Troll(ctx);
    this.monolith = new Image();
    this.monolith.onload = () => { this.drawMonolith() };
    this.monolith.src = './dist/assets/images/monolith/monolith.png';
    this.startGame();
  };
  
  drawMonolith(){
    this.ctx.drawImage(this.monolith, MON_POS_X, MON_POS_Y, MON_WIDTH, MON_HEIGHT);
  }

  
  startGame() {
    this.running = true;
    this.animate();
  };


  animate() {
    this.elf.animate();
    this.drawMonolith();
    window.requestAnimationFrame(this.animate.bind(this));
  };


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