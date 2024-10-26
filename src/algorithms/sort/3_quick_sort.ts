import {generateArrayNumbers} from "../../utils/generateArrayNumbers";

const arrayNumbers: Array<number> = generateArrayNumbers(25, true)
let iterationCounter = 0

function quickSort(array: Array<number>): Array<number> {
  if (array.length <= 1) {
    return array
  }
  let supportIndex = Math.floor(array.length / 2)
  let supportElement = array[supportIndex]

  let numbersLessThenSuppElement = []
  let numbersGreaterThenSuppElement = []

  for (let i = 0; i < array.length; i++) {
    iterationCounter++

    if (array[i] < supportElement) {
      numbersLessThenSuppElement.push(array[i])
    }
    if (array[i] > supportElement) {
      numbersGreaterThenSuppElement.push(array[i])
    }

  }
  return [...quickSort(numbersLessThenSuppElement), supportElement, ...quickSort(numbersGreaterThenSuppElement)] as Array<number>
}

console.log(arrayNumbers)
console.log("sorted array", quickSort(arrayNumbers))
console.log("iterationCounter = ", iterationCounter)
