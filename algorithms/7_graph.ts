//Задача, найти человека в кругах друзей, разбирающегося в программировании

const users: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]  // number of people
const relationship: Array<Array<number>> = [
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [4, 10],
  [5, 7],
  [6, 8],
  [6, 10],
  [7, 8],
  [7, 9],
  [8, 10],
  [10, 11],
]

const matrixFriends = getMatrix(users, relationship)
// console.log(matrixFriends)


searchByWidth(matrixFriends, 8, (x)=>{
  console.log(x)
})
function searchByWidth(matrix: Array<Array<number>>,selectedFriend: number, callback: (x:any)=>void) {
  const checked = [];
  const forCheck = [selectedFriend];

  while (forCheck.length) {
    const node:number|undefined = forCheck.shift();
    checked.push(node);

    callback(node);

    for (let i = 0; i < matrix[node].length; i++) {
      const friend = matrix[node][i];

      if (friend && !checked.includes(i) && !forCheck.includes(i)) {
        forCheck.push(i);
      }
    }
  }
}


// составление матрицы смежности кргов друзей
function getMatrix(nodes: Array<number>, edges: Array<Array<number>>) {
  const matrix = []
  for (let i = 0; i < nodes.length; i++) {
    const row = []
    for (let j = 0; j < nodes.length; j++) {
      row.push(0)
    }
    matrix.push(row)
  }
  for (const [a, b] of edges) {
    matrix[a][b] = 1
    matrix[b][a] = 1
  }


  return matrix
}