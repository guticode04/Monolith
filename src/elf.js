const ELF_WIDTH = 300;//80
const ELF_HEIGHT = 200;//110
const ELF_POS_X = 425;
const ELF_POS_Y = 125; 
class Elf {
  constructor(ctx){
    this.ctx = ctx;
    this.elf =  new Image();
    this.elf.onload = () => {};
    this.elf.src = './dist/assets/images/elf/elf_03_idle.png';
  }
  
  drawElf() {
    console.log("inside draw elf");
    // this.elf = new Image();
    // this.elf.onload = () => {
      this.ctx.drawImage(this.elf,
        //source position
        0, 0, this.elf.width/6, this.elf.height,
        //destination position
        ELF_POS_X, ELF_POS_Y, ELF_WIDTH, ELF_HEIGHT);
    // };
    // this.elf.src = './dist/assets/images/elf/elf_03_idle.png';
      
  } 

  

};

export default Elf;