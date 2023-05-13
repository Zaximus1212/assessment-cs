const findLongestWord = stringArray => {
    let longest = 0
    for(let i = 0; i <stringArray.length; i++){
        if(stringArray[i] == null){
            continue
        }
        if(longest < stringArray[i].length){
            longest = stringArray[i].length
        }
    }
    return longest
}

console.log(findLongestWord([null,"hi", "hello", "saiufghaksuydfga]","", 9, null]))

// runtime: 6.787202 ms, 8.066314 ms, 5.933683 ms -- the runtime complexity ought to be O(n) because its gotta loop through each index you give it no matter what.