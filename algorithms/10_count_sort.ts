import {generateArrayNumbers} from "../utils/generateArrayNumbers";

const arrayNumbers: Array<number> = [1,4,2,7,5,3,2,7,8,12,3,11,33]
let iterationCounter = 0

function countSort(array: Array<number>, maxElement: number): Array<number> {

  let orderOfNumbers = Array(maxElement + 1).fill(0)

  // iterationCounter += maxElement + 1 // добавить, если мы не знаем какой длины массив и каких чисел

  array.forEach(value => {
    orderOfNumbers[value]++
    iterationCounter++;
    }
  );

  let index = 0;

  orderOfNumbers.forEach((value, indexValue) => {
      for (let i = 0; i < value; i++) {
        array[index] = indexValue
        orderOfNumbers[indexValue]--
        index++
        iterationCounter++
      }
    }
  )
  return array;
}

console.log(arrayNumbers)
console.log("sorted array", countSort(arrayNumbers, 33))
console.log("iterationCounter = ", iterationCounter)
