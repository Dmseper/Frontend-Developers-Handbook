// Список смежности – более компактный способ представления графа, он требует меньше памяти и
// особенно удобен для "разреженных" графов, у которых немного ребер.

// Матрица смежности – более наглядная и удобная структура, позволяющая быстро определить, есть ли связь между двумя вершинами.
// Для "плотных" графов с большим количеством ребер матрица обычно выгоднее, чем список

//Способ представления структуры данных следует выбирать в зависимости от задачи и
// требований к использованию памяти и вычислительной сложности.
// Например, операция проверки наличия связи между двумя вершинами a и b в матрице занимает
// константное время – достаточно лишь проверить элемент graph[a][b]. В списке смежности же это будет сложнее
// – потребуется поиск элемента b в массиве graph[a]

class Graph {

  private graph: Map<number, number[]>;

  constructor(private numOfVertices: number) {
    this.graph = new Map<number, number[]>();
  }

  addVertex(vertex: number) {
    this.graph.set(vertex, []);
  }

  addEdge(vertex1: number, vertex2: number) {
    this.graph.get(vertex1)?.push(vertex2);
    this.graph.get(vertex1)?.push(vertex2);
  }

  depthFirstSearch(vertex: number, visited: boolean[]) {

    visited[vertex] = true;
    console.log(vertex);

    let neighbours = this.graph.get(vertex) ?? [];

    for (let i = 0; i < neighbours.length; i++) {
      let neighbour = neighbours[i];
      if (!visited[neighbour]) {
        this.depthFirstSearch(neighbour, visited);
      }
    }
  }

  breadthFirstSearch(start: number) {
    let visited: boolean[] = new Array(this.numOfVertices).fill(false);
    let queue: number[] = [];

    visited[start] = true;
    queue.push(start);

    while (queue.length !== 0) {
      let vertex = queue.shift() ?? 0;
      console.log(vertex);

      let neighbours = this.graph.get(vertex) ?? [];
      for (let i = 0; i < neighbours.length; i++) {
        let neighbour = neighbours[i];
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      }
    }
  }
}

let vertices = [0, 1, 2, 3, 4, 5];
let graph = new Graph(vertices.length);


for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

let visited = new Array(6).fill(false);
console.log('depthFirstSearch:');
graph.depthFirstSearch(0, visited);
console.log('breadthFirstSearch:');
graph.breadthFirstSearch(0);



