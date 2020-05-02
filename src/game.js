import Elf from './elf';
import Blast from './blast';
import Troll from './trolls';
import { 
  MON_WIDTH, 
  MON_HEIGHT,
  MON_POS_X,
  MON_POS_Y
} from './settings';
class Game {
  
  constructor(ctx) {
    this.ctx = ctx;
    // this.blast = new Blast(ctx);
    this.elf = new Elf(ctx);
    // this.troll = new Troll(ctx);
    this.loadResources();
    this.startGame();
  };

  loadResources(){
    this.monolith = new Image();
    this.monolith.src = './dist/assets/images/monolith/monolith.png';
    this.monolith.onload = () => {
      this.ctx.drawImage(this.monolith, MON_POS_X, MON_POS_Y, MON_WIDTH, MON_HEIGHT);
    }
  }

  startGame() {
    this.running = true;
    this.animate();
  };


  animate() {
    this.elf.drawElf();
  };



  
  


  // draw everything on canvas
  // draw() {
  //   console.log("inside game draw");
  //   this.drawMonolith();
  //   this.elf.drawElf();
  //   this.blast.drawBlast();
  //   this.troll.drawTroll();
  //   // this.troll.animateTroll();
  //   // window.requestAnimationFrame(this.draw.bind(this));
  // }



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