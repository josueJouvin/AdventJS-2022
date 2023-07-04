
//180 Puntos

function getCompleted(part, total) {
    const maxComDiv = (a, b) => {
      let c;
      while (b) {
        c = b;
        b = a % b;
        a = c;
      }
      return a;
    };
  
    const tiempoPart = part.split(':')
    const tiempoTotal = total.split(':')
    
    const partR = +tiempoPart[0] * 3600 + +tiempoPart[1] * 60 + +tiempoPart[2]
    const totalR = +tiempoTotal[0] * 3600 + +tiempoTotal[1] * 60 + +Number(tiempoTotal[2])
    
    const MCD = maxComDiv(partR,totalR)
    return partR / MCD + "/" + totalR / MCD
  }