const distance = 50
const sleighs = [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 }
]

function selectSleigh(distance, sleighs) {
  const resultado = sleighs.filter(sleigh =>  sleigh.consumption * distance <= 20).reverse().slice(0,1)
  return resultado.length > 0 ? resultado[0].name : null
}
selectSleigh(distance,sleighs)
