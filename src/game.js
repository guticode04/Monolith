// import { 
//   MON_WIDTH, 
//   MON_HEIGHT,
//   MON_POS_X,
//   MON_POS_Y
// } from './settings';
import Elf from './elf';
import Blast from './blast';
import Troll from './trolls';

const MON_POS_X = 380;
const MON_POS_Y = 190;
const MON_WIDTH = 200;
const MON_HEIGHT = 350;
class Game {
  constructor(ctx) {
    this.ctx = ctx;
    // this.blast = new Blast(ctx);
    this.elf = new Elf(ctx);
    // this.troll = new Troll(ctx);
    this.monolith = new Image();
    this.monolith.onload = () => { this.drawMonolith() };
    this.monolith.src = './dist/assets/images/monolith/monolith.png';
    // this.loadResources();
    this.startGame();
  };
  
  // loadResources(){
  drawMonolith(){
    // this.monolith = new Image();
    // this.monolith.onload = () => {
      this.ctx.drawImage(this.monolith, MON_POS_X, MON_POS_Y, MON_WIDTH, MON_HEIGHT);
    // }
    // this.monolith.src = './dist/assets/images/monolith/monolith.png';
  }

  
  startGame() {
    this.running = true;
    this.animate();
  };


  animate() {
    // this.elf.drawElf();
    this.drawMonolith();
    window.requestAnimationFrame(animate());
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