
const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

boxes.sort((a,b) => a.l - b.l)
  
return boxes.every((box,i) => {
  if(i == boxes.length-1) return true
  const cajaSig = boxes[i+1]
  const nextBox = box.l < cajaSig.l && box.w < cajaSig.w && box.h < cajaSig.h
  return nextBox
})


