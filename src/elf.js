const ELF_WIDTH = 300;//80
const ELF_HEIGHT = 200;//110
const ELF_POS_X = 425;
const ELF_POS_Y = 125; 
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
    // const singleImgHeight = 635;
    // const frameCount = 10;
    // single frameDim = 2000 * 1050;
    // const width = sheetWidth / frameCount;
    this.game.ctx.drawImage(this.elf,
      //source position
      730, 225, this.elf.width/6, this.elf.height,//450,635,
      //destination position
      ELF_POS_X, ELF_POS_Y, ELF_WIDTH, ELF_HEIGHT);
  }

  

}

export default Elf;