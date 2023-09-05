
function sortToys(toys, positions) {
    return toys.sort((toyA, toyB) => {
      return positions[toys.indexOf(toyA)] - positions[toys.indexOf(toyB)];
    });
  }
  
sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])
  