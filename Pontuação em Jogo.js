function NiveldeDifuculdade(dificuldade) {
    switch (dificuldade) {
        case 'F':
            return 100;
        case 'M':
            return 200;
        case 'D':
            return 500;
        default:
            return 0;
    }
}

console.log(NiveldeDifuculdade('F'))
console.log(NiveldeDifuculdade('M'))
console.log(NiveldeDifuculdade('D'))
console.log(NiveldeDifuculdade('E'))