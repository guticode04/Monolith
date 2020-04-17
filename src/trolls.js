const TROLL_WIDTH = 230;
const TROLL_HEIGHT = 200;

class Troll {
  constructor(game) {
    this.game = game;
    this.game.ctx = game.ctx;
    this.troll = new Image();
    this.troll.onload = () => {
      this.drawTroll();
    }
    this.troll.src = './dist/assets/images/trolls/troll_01_jump.png';
  }

  // requestAnimationFrame(animateTroll);

  animateTroll() {
    this.game.ctx.clearRect(0,0,this.game.canvas.width, this.game.canvas.height);
    const nextFrame = [0,1,2,3,4,5];
    let step = 0;
    this.drawTroll(nextFrame[step]);
    step++;
    if(step >= nextFrame.length){
      step = 0;
    }
    window.requestAnimationFrame(this.animateTroll.bind(this));
  }

  drawTroll(frameStep) {
    //sheetW = 9600;
    //sheetH = 1000;
    //each frame is 1600 * 1000
    const frameW = this.troll.width / 6;
    const frameH = this.troll.height;

    //first troll image
    this.game.ctx.drawImage(this.troll,
      //source position
      frameW * frameStep, 0, frameW, frameH,
      //destination position
      0, 320, TROLL_WIDTH, TROLL_HEIGHT
      )

    //second troll image
    // this.game.ctx.drawImage(this.troll,
    //   //source position
    //   frameW, 0, this.troll.width / 6, this.troll.height,
    //   //destination position
    //   50, 320, TROLL_WIDTH, TROLL_HEIGHT
    // )
    
    // //third troll
    // this.game.ctx.drawImage(this.troll,
    //   //source position
    //   frameW * 2, 0, this.troll.width / 6, this.troll.height,
    //   //destination position
    //   100, 320, TROLL_WIDTH, TROLL_HEIGHT
    // )

    // //fourth troll
    // this.game.ctx.drawImage(this.troll,
    //   //source position
    //   frameW * 3, 0, this.troll.width / 6, this.troll.height,
    //   //destination position
    //   150, 320, TROLL_WIDTH, TROLL_HEIGHT
    // )

    // //fifth troll
    // this.game.ctx.drawImage(this.troll,
    //   //source position
    //   frameW * 4, 0, this.troll.width / 6, this.troll.height,
    //   //destination position
    //   200, 320, TROLL_WIDTH, TROLL_HEIGHT
    // )

    // //sixth troll
    // this.game.ctx.drawImage(this.troll,
    //   //source position
    //   frameW * 5, 0, this.troll.width / 6, this.troll.height,
    //   //destination position
    //   250, 320, TROLL_WIDTH, TROLL_HEIGHT
    // )
  }

  checkElfCollision() {

  }

  checkEnergyBlastCollision() {

  }

  
  processDamage() {
    
  }
  
  // //animate/traversal
  // animateTroll() {

  // }
  
  
  //troll settings
  
  trollHealth() {

  }

  trollSpeed() {

  }

}

export default Troll;