
//80 PUNTOS

function getCompleted(part, total) {
    const tiempoPart = part.split(':')
    const tiempoTotal = total.split(':')
    
    const partR = +tiempoPart[0] * 3600 + +tiempoPart[1] * 60 + +tiempoPart[2]
    const totalR = +tiempoTotal[0] * 3600 + +tiempoTotal[1] * 60 + +Number(tiempoTotal[2])
    
    const maxComDiv = (a, b) => {
      let c;
      while (b) {
        c = b;
        b = a % b;
        a = c;
      }
      return a;
    };
    
    const MCD = maxComDiv(partR,totalR)
    return partR / MCD + "/" + totalR / MCD
    
  }
  
  getCompleted('00:10:00', '01:00:00')