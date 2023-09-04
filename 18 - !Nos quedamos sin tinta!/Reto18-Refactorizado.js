function dryNumber(dry, numbers){
    return Array.from({ length: numbers }, (_, index) => index + 1).filter(num => num.toString().includes(dry));
}

dryNumber(2,20)