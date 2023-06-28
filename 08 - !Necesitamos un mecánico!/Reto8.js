function checkPart(part) {
    if (part === part.split('').reverse().join('')) {
        return true
    }
    return !!part.split('').find((char) => {
        let newPart = part.replace(char, '')
        return newPart === newPart.split('').reverse().join('')
    })
}
checkPart("oso")