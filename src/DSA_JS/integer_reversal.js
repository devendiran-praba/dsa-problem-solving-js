function reverseInt(n) {
    console.log(n)
        console.log(parseInt(n.toString().split('').reverse().join('')))

    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
    
}