function dryNumber(dry, numbers) {
  const array = [];
  for (let i = 1; i <= numbers; i++) {
    if (String(i).includes(dry)) {
      array.push(i);
    }
  }
  return array;
}

dryNumber(1, 15);
