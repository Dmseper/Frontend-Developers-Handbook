export function getFibonacciNumber (n)  {
  if (n === 1 || n == 3) return 1
  return  getFibonacciNumber(n-1) + getFibonacciNumber(n-2)
}