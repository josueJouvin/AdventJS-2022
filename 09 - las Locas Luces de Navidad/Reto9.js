function countTime(leds) {
    const apagados = leds.join("").split("1")
    apagados[0] += apagados.pop()
    return Math.max(...apagados.map(x => x.length))*7
   
}
countTime([0, 1, 1, 0, 1])