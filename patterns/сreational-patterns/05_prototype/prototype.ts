
// Задача: Управление документами в системе электронного архива.
//
// Описание: В системе электронного архива необходимо управлять документами различных типов,
// таких как договоры, письма, отчеты и другие. Каждый документ может содержать уникальную информацию,
// такую как название, дата создания, автор и содержимое. Используя паттерн "Прототип" (Prototype),
// необходимо реализовать возможность создания и клонирования документов для эффективного управления электронным архивом.


// Абстрактный класс Документ
abstract class Document {
  protected title: string;
  protected creationDate: Date;
  protected author: string;
  protected content: string;

  constructor(title: string, creationDate: Date, author: string) {
    this.title = title;
    this.creationDate = creationDate;
    this.author = author;
  }

  abstract clone(): Document;

  // Методы получения свойств документа
  getTitle(): string {
    return this.title;
  }

  getCreationDate(): Date {
    return this.creationDate;
  }

  getAuthor(): string {
    return this.author;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }
}

// Конкретный класс Документ-Прототип
class Contract extends Document {
  constructor(title: string, creationDate: Date, author: string) {
    super(title, creationDate, author);
  }

  clone(): Document {
    const clone = new Contract(this.title, this.creationDate, this.author);
    clone.setContent(this.content);
    return clone;
  }
}

// Использование
const originalContract = new Contract("Contract", new Date(), "Ivan");
originalContract.setContent("This is the content of the contract.");

const clonedContract = originalContract.clone();

console.log(originalContract.getTitle());         // Output: Contract
console.log(originalContract.getCreationDate()); // Output: Current date and time
console.log(originalContract.getAuthor());      // Output: Ivan
console.log(originalContract.getContent());    // Output: This is the content of the contract.

console.log(clonedContract.getTitle());         // Output: Contract
console.log(clonedContract.getCreationDate()); // Output: Current date and time
console.log(clonedContract.getAuthor());      // Output: Ivan
console.log(clonedContract.getContent());    // Output: This is the content of the contract.
