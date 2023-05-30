class Vertex {
  constructor(public value: number, public left: Vertex | null = null, public right: Vertex | null = null) {
    this.value = value
  }
}

class BinaryTree {
  constructor(public root: Vertex | null = null) {
  }

  addVertex(value: number) {
    const newVertex: Vertex | null = new Vertex(value)
    if (!this.root) {
      this.root = newVertex
      return
    }

    let currentVertex: Vertex | null = this.root
    while (currentVertex) {
      if (newVertex.value < currentVertex.value) {
        if (!currentVertex.left) {
          currentVertex.left = newVertex
          return;
        }

        currentVertex = currentVertex.left
      } else {
        if (!currentVertex.right) {
          currentVertex.right = newVertex
          return;
        }
        currentVertex = currentVertex.right
      }
    }
  }


  preOrder(vertex: Vertex, callback: (any) => void) {
    if (!vertex) {
      return
    }
    if (callback) {
      callback(vertex)
    }
    this.preOrder(vertex.left, callback)
    this.preOrder(vertex.right, callback)
  }

  postOrder(vertex: Vertex, callback: (any) => void) {
    if (!vertex) {
      return
    }

    this.postOrder(vertex.left, callback)
    this.postOrder(vertex.right, callback)
    if (callback) {
      callback(vertex)
    }
  }

  inOrder(vertex: Vertex, callback: (any) => void) {
    if (!vertex) {
      return
    }

    this.inOrder(vertex.left, callback)
    if (callback) {
      callback(vertex)
    }
    this.inOrder(vertex.right, callback)
  }

  traverseDFS(callback: (vertex: any) => void, method: string) {
    // Методы DFS
    // IN ORDER: Идём по левому дереву. Действие с node. Идём по правому дереву.
    // PRE ORDER: Действие с node. Идём по левому дереву. Идём по правому дереву.
    // POST ORDER: Идём по левому дереву.  Идём по правому дереву. Действие с node.

    if (method === OrderTypes.INORDER) {
      return this.inOrder(this.root, callback)
    }
    if (method === OrderTypes.PREORDER) {
      return this.preOrder(this.root, callback)
    }
    if (method === OrderTypes.POSTORDER) {
      return this.postOrder(this.root, callback)
    }

  }

  traverseBFS(callback: (vertex: any) => void) {
    const queue = [this.root]

    while (queue.length) {
        const vertex = queue.shift()
        callback(vertex)

      if(vertex.left) {
        queue.push(vertex.left)
      }
      if(vertex.right) {
        queue.push(vertex.right)
      }

    }
  }
}

enum OrderTypes {
  PREORDER = 'preOrder',
  INORDER = 'inOrder',
  POSTORDER = 'postOrder'
}

const tree = new BinaryTree()

//                8
//             7     9
//           5          10
//         2   6            20
//                      11


tree.addVertex(8)
tree.addVertex(7)
tree.addVertex(9)
tree.addVertex(5)
tree.addVertex(10)
tree.addVertex(20)
tree.addVertex(6)
tree.addVertex(2)
tree.addVertex(11)


console.log(tree)

tree.traverseDFS((vertex) => {
  console.log(vertex.value)
}, "preOrder")
console.log('============')
tree.traverseDFS((vertex) => {
  console.log(vertex.value)
}, "inOrder")
console.log('============')
tree.traverseDFS((vertex) => {
  console.log(vertex.value)
}, "postOrder")
console.log('============')

tree.traverseBFS((vertex) => {
  console.log(vertex.value)
})
