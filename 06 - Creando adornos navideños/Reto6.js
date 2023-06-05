function createCube(size) {
    let row = "";
    let rowReverse = ""
  
    for(let i = 1; i <= size; i++){
      row += (" ".repeat(size-i) + "/\\".repeat(i) + "_\\".repeat(size) + "\n")
      rowReverse += (" ".repeat(i-1) + "\\/".repeat(size - (i-1)) + "_/".repeat(size) + (i === size ? "" : "\n"))
    }
  
    return row + rowReverse
}
  