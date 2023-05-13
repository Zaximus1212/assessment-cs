const word = "SsuPp"

const hasUniqueChars = word1 => {
    let charCheck = []
    let charBool = true
    const chars = word1.split('')
    for(let i = 0; i < chars.length; i++) {
        if(!charCheck.includes(chars[i])) {
            charCheck.push(chars[i])
        } else {
            charBool = false
        }
    }
    return 'it is ' + charBool + ' that this word has unique characters all the way through'

}
console.log(hasUniqueChars(word))

//6.460378 ms, 6.484054 ms, 5.077011 ms -- changing the length of the string had very small effect on the runtime but I still highly doubt that the complexity is O(1), if the string got very long it would be O(n) because i didnt use "break" to end if its false, therefore it will continue to run through each letter.