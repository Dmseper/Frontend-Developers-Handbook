import {generateArrayNumbers} from "../utils/generateArrayNumbers";
const arrayNumbers: Array<number> = generateArrayNumbers(25, true)
let iterationCounter = 0

function selectionSort(array: Array<number>) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
      iterationCounter++
    }
    let tmp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = tmp
  }
  return array
}

console.log(arrayNumbers)
console.log("sorted array",selectionSort(arrayNumbers))
console.log("iterationCounter = ", iterationCounter)
