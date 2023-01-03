
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

function countHours(year,holidays){
    
    let acumulador = 0
    for (let day of holidays){
        const fecha = new Date(`${year}/${day}`)
        const diaActual = a.getDay()

        if(diaActual === 0 || diaActual === 6){
            acumulador ++
        }
    }

    return acumulador * 2
    
}

countHours(year, holidays) // 2 días -> 4 horas extra en el año