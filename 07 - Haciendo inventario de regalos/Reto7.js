const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

function getGiftsToRefill(a1, a2, a3) {
  const stock = []
    const set1 = new Set(a1)
    const set2 = new Set(a2)
    const set3 = new Set(a3)
    stock.push(...set1,...set2,...set3)
  
    const restock = stock.filter(gift => {
      return stock.indexOf(gift) === stock.lastIndexOf(gift)
    })
  
  return restock
}

getGiftsToRefill(a1, a2, a3)