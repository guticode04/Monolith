class Blast {
  constructor(ctx) {
    this.ctx = ctx;
    this.blast = new Image();
    this.blast.onload = () => {
      this.drawBlast();
    }
    this.blast.src = './dist/assets/images/blast/blast.png';
  }

  chargeBlast() {

  };

  drawBlast() {
    this.ctx.drawImage(this.blast,
      //source position
      0,0,67,67,
      //destination position
      473, 140, 67, 67
      )
  };

  launchEnergyBlast() {

  };

  
  updateEnergyBlast() {
    
  };
  
  //animate/traversal
  
  
  //blast settings
  
  energyBlastPower() {

  };
  
};
export default Blast;