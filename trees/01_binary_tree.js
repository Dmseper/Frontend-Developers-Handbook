var Vertex = /** @class */ (function () {
    function Vertex(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
        this.value = value;
    }
    return Vertex;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree(root) {
        if (root === void 0) { root = null; }
        this.root = root;
    }
    BinaryTree.prototype.addVertex = function (value) {
        var newVertex = new Vertex(value);
        if (!this.root) {
            this.root = newVertex;
            return;
        }
        var currentVertex = this.root;
        while (currentVertex) {
            if (newVertex.value < currentVertex.value) {
                if (!currentVertex.left) {
                    currentVertex.left = newVertex;
                    return;
                }
                currentVertex = currentVertex.left;
            }
            else {
                if (!currentVertex.right) {
                    currentVertex.right = newVertex;
                    return;
                }
                currentVertex = currentVertex.right;
            }
        }
    };
    BinaryTree.prototype.preOrder = function (vertex, callback) {
        if (!vertex) {
            return;
        }
        if (callback) {
            callback(vertex);
        }
        this.preOrder(vertex.left, callback);
        this.preOrder(vertex.right, callback);
    };
    BinaryTree.prototype.postOrder = function (vertex, callback) {
        if (!vertex) {
            return;
        }
        this.postOrder(vertex.left, callback);
        this.postOrder(vertex.right, callback);
        if (callback) {
            callback(vertex);
        }
    };
    BinaryTree.prototype.inOrder = function (vertex, callback) {
        if (!vertex) {
            return;
        }
        this.inOrder(vertex.left, callback);
        if (callback) {
            callback(vertex);
        }
        this.inOrder(vertex.right, callback);
    };
    BinaryTree.prototype.traverseDFS = function (callback, method) {
        // Методы DFS
        // IN ORDER: Идём по левому дереву. Действие с node. Идём по правому дереву.
        // PRE ORDER: Действие с node. Идём по левому дереву. Идём по правому дереву.
        // POST ORDER: Идём по левому дереву.  Идём по правому дереву. Действие с node.
        if (method === OrderTypes.INORDER) {
            return this.inOrder(this.root, callback);
        }
        if (method === OrderTypes.PREORDER) {
            return this.preOrder(this.root, callback);
        }
        if (method === OrderTypes.POSTORDER) {
            return this.postOrder(this.root, callback);
        }
    };
    BinaryTree.prototype.traverseBFS = function (callback) {
        var queue = [this.root];
        while (queue.length) {
            var vertex = queue.shift();
            callback(vertex);
            if (vertex.left) {
                queue.push(vertex.left);
            }
            if (vertex.right) {
                queue.push(vertex.right);
            }
        }
    };
    return BinaryTree;
}());
var OrderTypes;
(function (OrderTypes) {
    OrderTypes["PREORDER"] = "preOrder";
    OrderTypes["INORDER"] = "inOrder";
    OrderTypes["POSTORDER"] = "postOrder";
})(OrderTypes || (OrderTypes = {}));
var tree = new BinaryTree();
//                8
//             7     9
//           5          10
//         2   6            20
//                      11
tree.addVertex(8);
tree.addVertex(7);
tree.addVertex(9);
tree.addVertex(5);
tree.addVertex(10);
tree.addVertex(20);
tree.addVertex(6);
tree.addVertex(2);
tree.addVertex(11);
console.log(tree);
tree.traverseDFS(function (vertex) {
    console.log(vertex.value);
}, "preOrder");
console.log('============');
tree.traverseDFS(function (vertex) {
    console.log(vertex.value);
}, "inOrder");
console.log('============');
tree.traverseDFS(function (vertex) {
    console.log(vertex.value);
}, "postOrder");
console.log('============');
tree.traverseBFS(function (vertex) {
    console.log(vertex.value);
});
