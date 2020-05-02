const TROLL_WIDTH = 230;
const TROLL_HEIGHT = 200;

class Troll {
  constructor(ctx) {
    this.ctx = ctx;
    // this.drawTroll(); this will draw it as soon as there is an instance of it
  }

  
  // animateTroll(step) {
  //   console.log("inside animate troll");

  //   this.game.ctx.clearRect(0,0,this.game.canvas.width, this.game.canvas.height);
  //   this.drawTroll(step);
  //   step += 1;
  //   if(step >= this.nextFrame.length){
  //       step = 0;
  //     }
  //   // window.requestAnimationFrame(this.animateTroll.bind(this));
  // }
    
  // drawTroll(frameStep) {
  drawTroll() {
    console.log("inside draw troll");
    //sheetW = 9600;
    //sheetH = 1000;
    //each frame is 1600 * 1000
    this.troll = new Image();
    this.troll.src = './dist/assets/images/trolls/troll_01_jump.png';
    const frameW = this.troll.width / 6;
    const frameH = this.troll.height;
    this.troll.onload = () => {
      // this.drawTroll();
      this.ctx.drawImage(this.troll,
        //source position
        // frameW * frameStep, 0, frameW, frameH,
        0, 0, frameW, frameH,
        //destination position
        0, 100, TROLL_WIDTH, TROLL_HEIGHT
        )
    }

    //first troll image

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