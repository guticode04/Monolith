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

  drawTroll() {
    //sheetW = 9600;
    //sheetH = 1000;

    this.game.ctx.drawImage(this.troll,
      //source position
      530, 360, 720, 550,
      //destination position
      0, 410, 80, 110
      )
  }
}

export default Troll;