
const year = 2023
const holidays = ['21/02', '07/04', '01/05', 01/01] // formato MM/DD

function countHours(year,holidays){
    
    let acumulador = 0
    for (let day of holidays){
        const fecha = new Date(`${year}/${day}`)
        const diaActual = fecha.getDay()

        if(!(diaActual === 0 || diaActual === 6)){
            acumulador +=2
        }

    }
    console.log(acumulador)
    return acumulador
}

countHours(year, holidays) // 2 días -> 4 horas extra en el año