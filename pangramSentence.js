const isPangram = (string) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    const alphaArray = alpha.split('')
    let checker = []
    for(let i = 0; i < string.length; i++){
        if(alphaArray.includes(string[i].toLowerCase()) && !checker.includes(string[i].toLowerCase())){
            checker.push(string[i].toLowerCase())
        }
    }
    if(checker.length == 26){
        return true
    } else {
        return false
    }
}
    
console.log( isPangram("The quick brown fox jumps over the lazy dog!")) //t

console.log( isPangram("I like cats, but not mice")) //f

//runtime: 5.977483 ms, 6.943734 ms, 6.158258 ms -- while there should be ways to make it run much faster like shutting off the loop once it gets all 26 letters, as the code is now the runtime complexity is O(n) because it has to loop through each letter you put in the string.