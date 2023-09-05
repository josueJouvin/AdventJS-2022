function carryGifts(gifts, maxWeight) {
  if (!gifts.every((gift) => maxWeight >= gift.length)) {
    return [];
  }

  const trineo = [];
  let saco = "";

  gifts.forEach(gift => {
    if (saco.length + gift.length <= maxWeight) {
      saco = saco ? `${saco} ${gift}` : gift;
    } else {
      trineo.push(saco);
      saco = gift;
    }
  });

  if (saco !== "") {
    trineo.push(saco);
  }

  return trineo;
}
carryGifts(["game", "bike", "book", "toy"], 10);
