import {generateArrayNumbers} from "../utils/generateArrayNumbers";

const arrayNumbers: Array<number> = generateArrayNumbers(10, true)
let iterationCounter = 0

function insertionSort(array: Array<number>): Array<number> {
  let sortedArr = [] as Array<number>

  array.forEach((item, index) => {

    let k = index, tempValue
    sortedArr.push(item)

    while (k > 0 && sortedArr[k]  < sortedArr[k - 1]) {

      tempValue = sortedArr[k - 1]
      sortedArr[k - 1] = sortedArr[k]
      sortedArr[k] = tempValue

      iterationCounter++
      k--
    }
  })
  
  return sortedArr
}

console.log(arrayNumbers)
console.log("sorted array", insertionSort(arrayNumbers))
console.log("iterationCounter = ", iterationCounter)
