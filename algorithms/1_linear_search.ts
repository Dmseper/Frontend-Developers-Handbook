const arrayNumbers: Array<number> = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
let iterationCounter = 0

function linearSearch(array: Array<number>, searchableItem: number) {
  for (let i = 0; i < array.length; i++) {
    iterationCounter++
    if (array[i] === searchableItem) {
      return i
    }
  }
  return null
}

console.log(linearSearch(arrayNumbers, 1))
console.log("iterationCounter = ", iterationCounter)