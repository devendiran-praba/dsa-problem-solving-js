function reverse(str) {
    return str.split('').reverse((rev,char)=> char + rev,'').join('')
}