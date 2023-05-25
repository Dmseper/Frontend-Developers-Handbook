import {generateArrayNumbers} from "../utils/generateArrayNumbers";

const arrayNumbers: Array<number> = generateArrayNumbers(25, true)
let iterationCounter = 0

function bubbleSort(array: Array<number>) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
      iterationCounter++
    }
  }
  return array
}

console.log(arrayNumbers)
console.log("sorted array", bubbleSort(arrayNumbers))
console.log("iterationCounter = ", iterationCounter)
