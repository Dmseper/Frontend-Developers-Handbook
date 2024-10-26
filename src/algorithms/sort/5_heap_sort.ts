import {generateArrayNumbers} from "../../utils/generateArrayNumbers";

const arrayNumbers: Array<number> = generateArrayNumbers(10, true)
let iterationCounter = 0

function heapify(array: Array<number>, parentIndex: number, length: number) {
  let leftChildIndex = 2 * parentIndex + 1
  let rightChildIndex = 2 * parentIndex + 2
  let parent = parentIndex

  if (leftChildIndex < length && array[leftChildIndex] > array[parent]) parent = leftChildIndex
  if (rightChildIndex < length && array[rightChildIndex] > array[parent]) parent = rightChildIndex
  if (parent !== parentIndex) {
    iterationCounter++
    [array[parentIndex], array[parent]] = [array[parent], array[parentIndex]]
    heapify(array, parent, length)
  }

}

function heapSort(array: Array<number>): Array<number> {
  //length/2-1 самый последний узел, которой может быть родителем, дальше идут только дети
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length)
  }
  for (let i = array.length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]]
    heapify(array, 0, i)
  }
  return array
}

console.log(arrayNumbers)
console.log("sorted array", heapSort(arrayNumbers))
console.log("iterationCounter = ", iterationCounter)
