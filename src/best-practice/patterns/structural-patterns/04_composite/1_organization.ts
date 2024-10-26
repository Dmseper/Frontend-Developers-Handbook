// Задача: Управление структурой организации с использованием паттерна "Компоновщик".
//
//   Описание: Вам предстоит разработать систему управления структурой организации с использованием паттерна "Компоновщик".
//   Организация состоит из различных подразделений, включая департаменты, отделы и сотрудников.
//   Вам необходимо создать механизм, который позволит управлять иерархией структуры организации, а также выполнять общие операции для всей структуры.


abstract class Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract print(): void;
}

class Department extends Component {
  private children: Component[] = [];

  public addComponent(component: Component): void {
    this.children.push(component);
  }

  public removeComponent(component: Component): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  public print(): void {
    console.log(`Department: ${this.name}`);
    for (const child of this.children) {
      child.print();
    }
  }
}

class Employee extends Component {
  private position: string;

  constructor(name: string, position: string) {
    super(name);
    this.position = position;
  }

  public print(): void {
    console.log(`Employee: ${this.name}, Position: ${this.position}`);
  }
}

// Создание департаментов
const marketing = new Department("Marketing");
const sales = new Department("Sales");

// Создание сотрудников
const john = new Employee("John", "Marketing Manager");
const mary = new Employee("Mary", "Sales Representative");
const peter = new Employee("Peter", "Sales Manager");

// Добавление сотрудников в департаменты
marketing.addComponent(john);
sales.addComponent(mary);
sales.addComponent(peter);

// Вывод информации о структуре организации
marketing.print();
sales.print();

//В данной задаче мы использовали паттерн "Компоновщик" для управления иерархической структурой организации.
// Классы "Департамент" и "Сотрудник" представляют компоненты структуры, которые могут быть вложены друг в друга
// . Класс "Департамент" имеет методы для добавления и удаления компонентов, а также вывода информации о своей структуре.
// Класс "Сотрудник" предоставляет метод для вывода информации о себе. Таким образом, мы можем создавать сложные
// иерархии структуры организации и управлять ими единообразно через общий интерфейс "Компонент".