//blast settings


//elf settings

// export const ELF_WIDTH = 230;//80
// export const ELF_HEIGHT = 230;//110
// export const ELF_POS_X = 425;
// export const ELF_POS_Y = 125; 

//game settings

export const GAME_WIDTH = 1000;
export const GAME_HEIGHT = 600;
export const gameControls = () => {
  document.addEventListener('keydown', (event) => {
    switch(event.keyCode) {
      case 37:
        break;
      case 38:
        break;
      case 39:
        break;
      case 40:
        break;
      default:
        break;
    }
  })

}



//monolith settings

export const MON_POS_X = 380;
export const MON_POS_Y = 190;
export const MON_WIDTH = 200;
export const MON_HEIGHT = 350;
