import {generateArrayNumbers} from "../utils/generateArrayNumbers";

const arrayNumbers: Array<number> = generateArrayNumbers(16, false)
let iterationCounter = 0

function recursiveBinarySearch(array: Array<number>, searchableItem: number, start: number, end: number): number {
  let middle = Math.floor((start + end) / 2)
  iterationCounter++
  if (searchableItem === array[middle]) {
    return middle
  }

  return searchableItem < array[middle]
    ? recursiveBinarySearch(array, searchableItem, start, middle - 1)
    : recursiveBinarySearch(array, searchableItem, middle + 1, end)

}

console.log(arrayNumbers)
console.log("position of searchable item = ", recursiveBinarySearch(arrayNumbers, 8, 0, arrayNumbers.length))
console.log("iterationCounter = ", iterationCounter)
