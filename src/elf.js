const ELF_WIDTH = 300;//80
const ELF_HEIGHT = 200;//110
const ELF_POS_X = 425;//425;
const ELF_POS_Y = 125;//125; 
class Elf {
  constructor(ctx){
    this.ctx = ctx;
    this.elf =  new Image();
    this.elf.onload = () => { this.drawElf() };
    this.elf.src = "./dist/assets/images/elf/elf_03_idle.png";
    this.animate();
  }
  
  drawElf() {
    this.ctx.drawImage(this.elf,
    //source position
    0, 0, this.elf.width/6, this.elf.height,
    //destination position
    ELF_POS_X, ELF_POS_Y, ELF_WIDTH, ELF_HEIGHT);
  } 

  animate() {
    //I really really like coding! I can create just about anything I 
    //can think of! It's my tool for creation. Bring something to life!!

    //We need to flip through the sprite image
    this.elf
  }
  

};

export default Elf;