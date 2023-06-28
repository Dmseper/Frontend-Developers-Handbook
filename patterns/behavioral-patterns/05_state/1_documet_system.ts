//Задача: Разработка системы управления состоянием документа с использованием паттерна "Состояние".
//
// Описание: Вам необходимо создать систему для работы с документами, которая будет иметь различные состояния
// в зависимости от текущего статуса документа. Например, у вас может быть состояние "Черновик", "На рассмотрении",
// "Утвержден" и "Отклонен". Каждое состояние определяет различные действия и доступные операции для данного статуса документа.


abstract class State {
  protected document: Document;

  constructor(protected document: Document) {}

  public abstract approve(): void;
  public abstract reject(): void;
  public abstract revise(): void;
}

class Document {
  private state: State;

  public setState(state: State): void {
    this.state = state;
  }

  public approve(): void {
    this.state.approve();
  }

  public reject(): void {
    this.state.reject();
  }

  public revise(): void {
    this.state.revise();
  }
}

class Draft extends State {
  public approve(): void {
    console.log("Документ не может быть утвержден в состоянии черновика");
  }

  public reject(): void {
    console.log("Документ не может быть отклонен в состоянии черновика");
  }

  public revise(): void {
    console.log("Документ находится в состоянии черновика. Вносите изменения.");
  }
}

class UnderReview extends State {
  public approve(): void {
    console.log("Документ утвержден");
    this.document.setState(new Approved(this.document));
  }

  public reject(): void {
    console.log("Документ отклонен");
    this.document.setState(new Rejected(this.document));
  }

  public revise(): void {
    console.log("Документ находится на рассмотрении. Внесение изменений невозможно.");
  }
}

class Approved extends State {
  public approve(): void {
    console.log("Документ уже утвержден");
  }

  public reject(): void {
    console.log("Документ не может быть отклонен после утверждения");
  }

  public revise(): void {
    console.log("Документ уже утвержден. Внесение изменений невозможно.");
  }
}

class Rejected extends State {
  public approve(): void {
    console.log("Документ не может быть утвержден после отклонения");
  }

  public reject(): void {
    console.log("Документ уже отклонен");
  }

  public revise(): void {
    console.log("Документ отклонен. Внесение изменений невозможно.");
  }
}


// Создание объекта документа
const document = new Document();

// Установка начального состояния (Черновик)
const initialState = new Draft(document);
document.setState(initialState);

// Выполнение операций над документом
document.revise(); // Вывод: "Документ находится в состоянии черновика. Вносите изменения."

document.approve(); // Вывод: "Документ не может быть утвержден в состоянии черновика"

// Установка нового состояния (На рассмотрении)
const reviewState = new UnderReview(document);
document.setState(reviewState);

document.approve(); // Вывод: "Документ утвержден"
document.revise(); // Вывод: "Документ находится на рассмотрении. Внесение изменений невозможно."

// Установка нового состояния (Утвержден)
const approvedState = new Approved(document);
document.setState(approvedState);

document.approve(); // Вывод: "Документ уже утвержден"
document.reject(); // Вывод: "Документ не может быть отклонен после утверждения"

// Установка нового состояния (Отклонен)
const rejectedState = new Rejected(document);
document.setState(rejectedState);

document.reject(); // Вывод: "Документ уже отклонен"
document.revise(); // Вывод: "Документ отклонен. Внесение изменений невозможно."

