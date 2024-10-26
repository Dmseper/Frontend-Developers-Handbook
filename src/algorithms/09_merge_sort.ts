import {generateArrayNumbers} from "../utils/generateArrayNumbers";

const arrayNumbers: Array<number> = generateArrayNumbers(6, true)
let iterationCounter = 0

function mergeSort(array: Array<number>): Array<number> {
  if (array.length <= 1) {
    return array
  }
  let middle = Math.floor(array.length / 2)
  let leftHalf = array.slice(0, middle)
  let rightHalf = array.slice(middle)


  return mergeArrays(mergeSort(leftHalf), mergeSort(rightHalf))
}

function mergeArrays(left: Array<number>, right: Array<number>): Array<number> {
  let tempArr = [] as Array<number>
  let i = 0, j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      tempArr.push(left[i])
      iterationCounter++
      i++
    } else {
      tempArr.push(right[j])
      iterationCounter++
      j++
    }
  }
  if (i < left.length) {
    tempArr = tempArr.concat(left.slice(i))
    iterationCounter++
  }
  if (j < right.length) {
    tempArr = tempArr.concat((right.slice(j)))
    iterationCounter++
  }


  return tempArr
}

console.log("array numbers", arrayNumbers)
console.log("sorted array", mergeSort(arrayNumbers))
console.log("iterationCounter = ", iterationCounter)
