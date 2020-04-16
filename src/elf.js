import { 
  GAME_WIDTH,
  GAME_HEIGHT,
  ELF_WIDTH, 
  ELF_HEIGHT,
  ELF_POS_X,
  ELF_POS_Y 
} from "./settings";

class Elf {
  constructor(game){
    this.width = ELF_WIDTH;
    this.height = ELF_HEIGHT;
    this.game = game;
    this.game.ctx = game.ctx;
    this.elf = new Image();
    this.elf.onload = () => {
      this.drawElf();
    }
    this.elf.src = './dist/assets/images/elf/elf_03_idle.png';
  }

  drawElf() {
    // const sheetWidth = 20000;
    // const sheetHeight = 1050;
    // const srcX;
    // const srcY;
    // const imgBufferLeft = 730;
    // const imgBufferTop = 225;
    // const imgBufferBottom = 225;
    // const imgBufferBetween = 1550;
    // const singleImgWidth = 450;
    // const singleImgHeight = 600;
    // const frameCount = 10;
    // const width = sheetWidth / frameCount;
  
    this.game.ctx.drawImage(this.elf,
      //source position
      730, 225, 450, 635,
      //destination position
      ELF_POS_X, ELF_POS_Y, ELF_WIDTH, ELF_HEIGHT);
  }

}

export default Elf;