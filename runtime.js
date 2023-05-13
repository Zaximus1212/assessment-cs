const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
// doublerAppend(extraLargeArray);
// doublerAppend(largeArray);
// doublerAppend(mediumArray);
// doublerAppend(smallArray);
doublerAppend(tinyArray);

//****** hasUniqueCharacters *******
// const word = "SsuPp"
// const hasUniqueChars = word1 => {
//     let charCheck = []
//     let charBool = true
//     const chars = word1.split('')
//     for(let i = 0; i < chars.length; i++) {
//         if(!charCheck.includes(chars[i])) {
//             charCheck.push(chars[i])
//         } else {
//             charBool = false
//         }
//     }
//     return 'it is ' + charBool + ' that this word has unique characters all the way through'

// }
// console.log(hasUniqueChars(word))

//****** addToZero *******
// let array = [0, 1, 2, 3, 4, 5)
// zeroCounter = 0
// negativeCounter = []
// truthCounter = 0
// for(let i=0 ; i < array.length; i++) {
//     if (array[i] === 0){
//         zeroCounter++
//     } else if (array[i] < 0) {
//         negativeCounter.push(array[i])
//     }
// }
// for ( let i=0; i<negativeCounter.length; i++){
//     if(array.includes(negativeCounter[i] * -1)) {
//         truthCounter++
//     }
// }
// if (zeroCounter >= 2) {
//     truthCounter++
// }

// if (truthCounter > 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
// doublerInsert(extraLargeArray);
// doublerInsert(largeArray);
// doublerInsert(mediumArray);
// doublerInsert(smallArray);
doublerInsert(tinyArray);
// let array2 = [28, 43, -12, 30, 4, 0, 12]

//****** addToZeroV2 *******
// let value = false;
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (i !== j) {
//       if (array[i] + array[j] === 0) {
//         value = true;
//       } 
//     }
//   }
// }

// console.log(value)

// //****** longestWord *******
// const findLongestWord = stringArray => {
//     let longest = 0
//     for(let i = 0; i <stringArray.length; i++){
//         if(stringArray[i] == null){
//             continue
//         }
//         if(longest < stringArray[i].length){
//             longest = stringArray[i].length
//         }
//     }
//     return longest
// }

// console.log(findLongestWord([null,"hi", "hello", "saiufghaksuydfga]","", 9, null]))

// //****** pangramSentence *******
// const isPangram = (string) => {
//     const alpha = "abcdefghijklmnopqrstuvwxyz"
//     const alphaArray = alpha.split('')
//     let checker = []
//     for(let i = 0; i < string.length; i++){
//         if(alphaArray.includes(string[i].toLowerCase()) && !checker.includes(string[i].toLowerCase())){
//             checker.push(string[i].toLowerCase())
//         }
//     }
//     if(checker.length == 26){
//         return true
//     } else {
//         return false
//     }
// }
    
// console.log( isPangram("The quick brown fox jumps over the lazy dog!")) //t

// console.log( isPangram("I like cats, but not mice")) //f

let resultsInsert = perf.stop();

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
