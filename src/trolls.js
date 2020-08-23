import {
  GAME_WIDTH,
  GAME_HEIGHT
} from "./settings";

const TROLL_WIDTH = 230;
const TROLL_HEIGHT = 200;

class Troll {
  constructor(ctx) {
    this.ctx = ctx;
    this.troll = new Image();
    this.troll.onload = () => {
      //this will draw it as soon as there is an instance of it
      this.drawTrollFrame();
    }
    this.troll.src = './dis/assets/images/trolls/troll_01_jump.png';
  }

  animate() {
    this.ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    //this could be a problem because in the game file you are calling
    //animate over and over so each time you are defining these variables
    //so your frame is always going to be on the first frame of the 
    //sprite sheet
    let currentFrameIdx = 0;
  }
  drawTrollFrame(frameIdx) {
    console.log("inside draw troll");
    //sheetW = 9600;
    //sheetH = 1000;
    //each frame is 1600 * 1000
    const frameW = this.troll.width / 6;
    const frameH = this.troll.height;
    
    // this.drawTroll();
    this.ctx.drawImage(this.troll,
      //source position
      // frameW * frameStep, 0, frameW, frameH,
      frameIdx, 0, frameW, frameH,
      //destination position
      0, 100, TROLL_WIDTH, TROLL_HEIGHT);
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


  checkElfCollision() {

  }

  checkEnergyBlastCollision() {

  }

  
  processDamage() {
    
  }

  //troll settings
  
  trollHealth() {

  }

  trollSpeed() {

  }

}

export default Troll;