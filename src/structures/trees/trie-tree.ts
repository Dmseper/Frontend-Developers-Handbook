`
  Trie или префиксное дерево — это особый вид дерева поиска, в котором для ключей узлов обычно используются строки.
  Префиксные деревья могут использоваться, например, для реализации множеств и ассоциативных массивов,
  но по-настоящему они проявляют себя при обходе и поиске ключей, начинающихся с определенного префикса.
`

class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Метод для добавления слова в Trie
  insert(word: string): void {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char)!;
    }
    currentNode.isEndOfWord = true;
  }

  // Метод для поиска слова в Trie
  search(word: string): boolean {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return currentNode.isEndOfWord;
  }

  // Метод для поиска префикса в Trie
  startsWith(prefix: string): boolean {
    let currentNode = this.root;

    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return true;
  }
}


const trie = new Trie();
trie.insert("hello");
trie.insert("world");

console.log(trie.search("hello")); // true
console.log(trie.search("wor"));   // false
console.log(trie.startsWith("wor")); // true
