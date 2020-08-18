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
  
  //this is one frame of the image

  drawElfFrame() {
    this.ctx.drawImage(this.elf,
    //source position
    0, 0, this.elf.width/6, this.elf.height,
    //destination position
    ELF_POS_X, ELF_POS_Y, ELF_WIDTH, ELF_HEIGHT);
  } 
  step() {
    let nextFrame = 0;
    
    return nextFrame;
  }

  animate() {
    this.ctx.clearRec(0,0,GAME_WIDTH,GAME_HEIGHT);

    //We need to flip through the sprite image
    this.elf
  }
  

};

export default Elf;