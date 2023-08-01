Принцип подстановки Барбары Лисков (Liskov Substitution Principle, LSP) - это один из пяти принципов SOLID, который гласит, что объекты базового класса должны быть заменяемыми объектами своих производных классов без изменения корректности программы.

Давайте рассмотрим пример на TypeScript, в котором нарушается принцип подстановки Барбары Лисков:

```typescript
// Нарушение принципа подстановки Барбары Лисков
class Rectangle {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  // Переопределение метода getArea для квадрата
  getArea(): number {
    return this.width * this.width;
  }
}

function printArea(rectangle: Rectangle) {
  console.log('Площадь:', rectangle.getArea());
}

const rectangle = new Rectangle(4, 6);
const square = new Square(5);

printArea(rectangle); // Ожидается: Площадь: 24
printArea(square);    // Ожидается: Площадь: 25
```

В этом примере класс `Square` наследует класс `Rectangle` и переопределяет метод `getArea`, чтобы возвращать площадь квадрата, а не прямоугольника. Нарушение принципа подстановки Барбары Лисков происходит в функции `printArea`, которая принимает объект типа `Rectangle`. Мы передаем экземпляр класса `Square` в функцию, и она возвращает некорректный результат, так как предполагает, что будет работать с объектом типа `Rectangle`.

Для соблюдения принципа подстановки Барбары Лисков мы должны следовать контракту базового класса `Rectangle`, что означает, что производный класс `Square` не должен менять поведение методов базового класса.

Чтобы исправить нарушение принципа, можно воспользоваться паттерном "Шаблонный метод":

```typescript
class Shape {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }
}

class Square extends Shape {
  constructor(side: number) {
    super(side, side);
  }
}

function printArea(shape: Shape) {
  console.log('Площадь:', shape.getArea());
}

const rectangle = new Rectangle(4, 6);
const square = new Square(5);

printArea(rectangle); // Ожидается: Площадь: 24
printArea(square);    // Ожидается: Площадь: 25
```

Теперь общий функционал для вычисления площади вынесен в базовый класс `Shape`, и производные классы `Rectangle` и `Square` не нарушают принцип подстановки Барбары Лисков, так как они не переопределяют базовый метод `getArea`.