import {
  GAME_WIDTH,
  GAME_HEIGHT
} from "./settings";

const ELF_WIDTH = 300;//80
const ELF_HEIGHT = 200;//110
const ELF_POS_X = 425;//425;
const ELF_POS_Y = 125;//125; 
class Elf {
  constructor(ctx){
    this.ctx = ctx;
    this.elf =  new Image();
    this.elf.onload = () => { this.drawElfFrame() };
    this.elf.src = "./dist/assets/images/elf/elf_03_idle.png";
    this.animate();
  }

  drawElfFrame(frameIdx) {
    this.ctx.drawImage(this.elf,
    //source position
    frameIdx, 0, this.elf.width/6, this.elf.height,
    //destination position
    ELF_POS_X, ELF_POS_Y, ELF_WIDTH, ELF_HEIGHT);
  } 

  animate() {
    this.ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    // let currentFrameIdx = 0;
    // let frameCycle = [0, 2000, 4000, 6000, 8000, 10000, 12000];
    this.drawElfFrame(frameCycle[currentFrameIdx]);
    // currentFrameIdx++;
    // if(currentFrameIdx >= frameCycle.length) { 
    //   currentFrameIdx = 0;
    // }
  }
  
  //this won't work its basically the same thing
  step() {
    let currentFrameIdx = 0;
    let frameCycle = [0, 2000, 4000, 6000, 8000, 10000, 12000];
    currentFrameIdx++;
    if(currentFrameIdx >= frameCycle.length) {
      currentFrameIdx = 0;
    }
    frameStep = frameCycle[currentFrameIdx];
    return frameStep;
  }
  

};

export default Elf;