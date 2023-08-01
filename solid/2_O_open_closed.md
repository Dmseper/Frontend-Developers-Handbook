Принцип открытости/закрытости (Open/Closed Principle, OCP) - это один из пяти принципов SOLID. Он гласит, что программные сущности, такие как классы, модули, функции и т. д., должны быть открыты для расширения, но закрыты для изменения. Это означает, что мы должны стремиться изменять поведение программы, добавляя новый код, а не изменяя существующий.

Пример на TypeScript, в котором нарушается принцип открытости/закрытости:

```typescript
// Нарушение принципа открытости/закрытости
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
}

// Функция для вычисления площади фигуры
function calculateArea(shape: Rectangle | Square): number {
  return shape.getArea(); // Ожидается: Вычисление площади фигуры
}

const rectangle = new Rectangle(4, 6);
const square = new Square(5);

console.log(calculateArea(rectangle)); // Ожидается: 24
console.log(calculateArea(square));    // Ожидается: 25

// В будущем мы хотим добавить поддержку новой фигуры Circle
class Circle {
  protected radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(3);

console.log(calculateArea(circle)); // Ошибка компиляции, функция calculateArea не поддерживает тип Circle
```

В этом примере функция `calculateArea` принимает в качестве параметра объекты типов `Rectangle` или `Square`, но она не поддерживает тип `Circle`. Это нарушает принцип открытости/закрытости, так как нам приходится изменять код функции, чтобы добавить поддержку новой фигуры `Circle`.

Для соблюдения принципа открытости/закрытости, функция `calculateArea` должна быть расширяемой и поддерживать новые типы фигур без изменения своего кода:

```typescript
// Соблюдение принципа открытости/закрытости
interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
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

class Square implements Shape {
  protected side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea(): number {
    return this.side * this.side;
  }
}

class Circle implements Shape {
  protected radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Функция для вычисления площади фигуры
function calculateArea(shape: Shape): number {
  return shape.getArea(); // Вычисление площади фигуры
}

const rectangle = new Rectangle(4, 6);
const square = new Square(5);
const circle = new Circle(3);

console.log(calculateArea(rectangle)); // 24
console.log(calculateArea(square));    // 25
console.log(calculateArea(circle));    // 28.274333882308138
```

Теперь мы определяем интерфейс `Shape`, который описывает метод `getArea()`, и все классы `Rectangle`, `Square` и `Circle` реализуют этот интерфейс. Функция `calculateArea` теперь принимает объекты типа `Shape`, что позволяет ей поддерживать различные типы фигур без необходимости изменения кода функции. Это соответствует принципу открытости/закрытости.