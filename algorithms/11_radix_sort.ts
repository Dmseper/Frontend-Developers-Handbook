import {generateArrayNumbers} from "../utils/generateArrayNumbers";

const arrayNumbers: Array<number> = generateArrayNumbers(10, true)
let iterationCounter = 0

// function radixSort(array: Array<number>) {
//   let position = Array(10).fill(0).map((value: Array<number>) => [])
//   let multiplier = 1
//   let maxValue = Math.max(...array)
//
//   while (maxValue - multiplier >= 0) {
//     array.forEach((value: number )=> {
//         let slice = Math.floor(value / multiplier)
//         position[slice % 10].push(value)
//       }
//     )
//     let indexValue = 0;
//     position.forEach((values: Array<number>) => {
//         for (let i = 0; values.length > 0; i++) {
//           array[indexValue] = values.shift() ?? 0;
//           indexValue++;
//         }
//       }
//     )
//     multiplier *= 10;
//   }
//   return array;
// }
//
// console.log(arrayNumbers)
// console.log("sorted array", radixSort(arrayNumbers))
// console.log("iterationCounter = ", iterationCounter)





