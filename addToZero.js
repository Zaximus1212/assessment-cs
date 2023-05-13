// //devmountain solution 78.744 μs, 120.866 μs, 96.052 μs -- i would think this is O(log(n)) because it could run as long as theres more to loop through but it could also end early if it finds its 0
// let array2 = [28, 43, -12, 30, 4, 0, 12]

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

//my solution 5.31023 ms, 6.974607 ms, 6.731789 ms -- i think the runtime complexity might be O(log(n)) with optimal code. however my code is O(n) because even if it finds an addition to 0 it continues to loop and run until the end
let array = [0, 1, 2, 3, 4, 5]

zeroCounter = 0
negativeCounter = []
truthCounter = 0
for(let i=0 ; i < array.length; i++) {
    if (array[i] === 0){
        zeroCounter++
    } else if (array[i] < 0) {
        negativeCounter.push(array[i])
    }
}
for ( let i=0; i<negativeCounter.length; i++){
    if(array.includes(negativeCounter[i] * -1)) {
        truthCounter++
    }
}
if (zeroCounter >= 2) {
    truthCounter++
}

if (truthCounter > 0) {
    console.log(true)
} else {
    console.log(false)
}