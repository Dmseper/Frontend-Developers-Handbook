export function generateArrayNumbers(numberOfElements: number, isRandom: boolean) {

  let tempArray = []

  if (isRandom) {
    while (numberOfElements > 0) {
      tempArray.push(generateRandomNumber(0, 100))
      numberOfElements--
    }
    return tempArray
  }

  for (let i = 0; i < numberOfElements; i++) {
    tempArray.push(i)
  }
  return tempArray
}

export const generateRandomNumber = (min: number, max: number) => {
  let minimum: number = Math.ceil(min);
  let maximum: number = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
