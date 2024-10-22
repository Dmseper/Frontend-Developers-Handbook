/*
  Паттерн "Мост" позволяет отделить абстракцию (например, класс "Фигуры") от её реализации, что позволяет изменять их независимо друг от друга.
  В нашем случае абстракцией будут различные типы фигур, а реализацией — способы их отрисовки (например, отрисовка в SVG или на холсте HTML5).
 */

// Абстракция "Цвет" — интерфейс для реализации цветов
interface Color {
  applyColor(): string;
}

// Реализация абстракции для конкретных цветов
class RedColor implements Color {
  applyColor(): string {
    return "Red";
  }
}

class BlueColor implements Color {
  applyColor(): string {
    return "Blue";
  }
}

// Абстракция "Фигура"
abstract class Shape {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract draw(): void;
}

// Конкретные фигуры, такие как "Круг" и "Квадрат"
class Circle extends Shape {
  draw(): void {
    console.log(`Drawing a Circle with color: ${this.color.applyColor()}`);
  }
}

class Square extends Shape {
  draw(): void {
    console.log(`Drawing a Square with color: ${this.color.applyColor()}`);
  }
}

// Пример использования
const redCircle = new Circle(new RedColor());
redCircle.draw(); // Выведет: Drawing a Circle with color: Red

const blueSquare = new Square(new BlueColor());
blueSquare.draw(); // Выведет: Drawing a Square with color: Blue
