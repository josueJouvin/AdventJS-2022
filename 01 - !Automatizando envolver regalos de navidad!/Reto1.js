const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {

    return gifts.map(regalo => {
            const envoltorio = '*'.repeat(regalo.length + 2)
            const regaloEmpaquetado = `${envoltorio}\n*${regalo}*\n${envoltorio}`
            
            //console.log(regaloEmpaquetado)
            return regaloEmpaquetado
        })
}
wrapping(gifts)
