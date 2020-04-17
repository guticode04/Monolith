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


    //We don't need these in here if we have them imported
    // this.elf = new Elf(this); //Do I need to pass in the game? Probably ctx would be better!
    // this.blast = new Blast(this); //^?
    // this.troll = new Troll(this); // ^?
    // this.monolith = new Image();
    // this.monolith.onload = () => {
    //   this.drawMonolith();
    // }
    // this.monolith.src = './dist/assets/images/monolith/monolith.png';
    // this.draw();
    // this.init();


  };
  
  
  startGame() {
    this.running = true; // keep track of whether or not game is running
    this.animate();
  }
  
  // this will draw everything on canvas
  animate() {
    this.elf.animate(this.ctx);
    this.troll.animate(this.ctx);
    this.blast.animate(this.ctx);
    if (this.running) {
      window.requestAnimationFrame(this.animate.bind(this)); //game loop while runnning
    }
  }
  
  


  // drawMonolith() {
  //   console.log("inside draw mon");
  //   this.ctx.drawImage(this.monolith, MON_POS_X, MON_POS_Y, MON_WIDTH, MON_HEIGHT);
  // };

  // draw everything on canvas
  // draw() {
  //   console.log("inside game draw");
  //   // this.drawMonolith();
  //   // this.elf.drawElf();
  //   // this.blast.drawBlast();
  //   this.troll.animateTroll();
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