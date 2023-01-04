const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]


function distributeGifts(packOfGifts,reindeers){
    let pesoRegalos = 0
    let pesoRenos = 0
    
    packOfGifts.forEach(gift => {
        let cantidadRegalos = gift.length 
         return pesoRegalos += cantidadRegalos
    });

    reindeers.forEach(renos => {
        let cantidadRenos = renos.length 
        let pesoTotalRenos = cantidadRenos * 2
        return pesoRenos += pesoTotalRenos
    });
     
    return Math.floor(pesoRenos / pesoRegalos)
}

//Manera mas corta de resolverlo
/*
function distributeGifts(packOfGifts,reindeers){
    const pesoRegalos = packOfGifts.join('').length
    const capacidad = reindeers.join('').length * 2

    return Math.floor(pesoRegalos / capacidad)
}
*/
distributeGifts(packOfGifts, reindeers) // 2