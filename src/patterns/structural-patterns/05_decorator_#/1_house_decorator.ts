//Задача: Создание системы проектирования и строительства домов с использованием паттерна "Декоратор".
//
// Описание: Вам необходимо разработать систему для проектирования и строительства домов с возможностью добавления
// дополнительных характеристик и функциональности к основным строительным элементам. Для этого вы решаете использовать паттерн "Декоратор",
// который позволяет динамически добавлять новые возможности к объектам.

abstract class House {
  public abstract getDescription(): string;

  public abstract getCost(): number;
}

class SmallHouse extends House {
  public getDescription(): string {
    return "Маленький дом";
  }

  public getCost(): number {
    return 50000;
  }
}

class BigHouse extends House {
  public getDescription(): string {
    return "Большой дом";
  }

  public getCost(): number {
    return 100000;
  }
}

abstract class Decorator extends House {
  protected house: House;

  constructor(house: House) {
    super();
    this.house = house;
  }
}

class Garden extends Decorator {
  public getDescription(): string {
    return this.house.getDescription() + ", сад";
  }

  public getCost(): number {
    return this.house.getCost() + 10000;
  }
}

class SwimmingPool extends Decorator {
  public getDescription(): string {
    return this.house.getDescription() + ", бассейн";
  }

  public getCost(): number {
    return this.house.getCost() + 50000;
  }
}

// Создание маленького дома
let house: House = new SmallHouse();

// Добавление дополнительных характеристик с помощью декораторов
house = new Garden(house); // Добавление сада
house = new SwimmingPool(house); // Добавление бассейна

console.log(house.getDescription()); // Выводит "Маленький дом, сад, бассейн"
console.log(house.getCost()); // Выводит сумму стоимости всех характеристик

// Создание большого дома
let bigHouse: House = new BigHouse();

// Добавление дополнительных характеристик
bigHouse = new Garden(bigHouse);
bigHouse = new SwimmingPool(bigHouse);

console.log(bigHouse.getDescription()); // Выводит "Большой дом, сад, бассейн"
console.log(bigHouse.getCost()); // Выводит сумму стоимости всех характеристик

// В данной задаче мы используем паттерн "Декоратор" для добавления дополнительных характеристик к основным строительным элементам (домам).
// Классы "Дом" и "Декоратор" предоставляют общий интерфейс для всех объектов, а декораторы расширяют функциональность базовых объектов,
// добавляя новые характеристики. Это позволяет гибко создавать различные комбинации дополнительных характеристик без необходимости изменения основных классов.