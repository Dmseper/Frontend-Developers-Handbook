import {generateArrayNumbers} from "../utils/generateArrayNumbers";

const arrayNumbers: Array<number> = generateArrayNumbers(16, false)
let iterationCounter = 0

function binarySearch(array: Array<number>, searchableItem: number) {
  let start = 0
  let end = array.length
  let middle;
  let found = false
  let position = -1
  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2)
    iterationCounter++
    if (array[middle] === searchableItem) {
      found = true
      position = middle
      return position
    }
    if (searchableItem < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return position
}
console.log(arrayNumbers)
console.log("position of searchable item = ",binarySearch(arrayNumbers, 8))
console.log("iterationCounter = ", iterationCounter)
