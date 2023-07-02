function checkJump(heights) {
    const recorte = heights.splice(0,heights.indexOf(Math.max(...heights)))
  
    const resultIz = recorte.slice(1).every((valor,i) => valor >= recorte[i])
    const resultDr = heights.slice(1).every((valor,i) => valor <= heights[i])
    
    return (resultIz && resultDr && !!recorte.length && heights.length > 1)
  }
  
  const heights = [1, 3, 2, 5, 4, 3, 2, 1]
  checkJump(heights)