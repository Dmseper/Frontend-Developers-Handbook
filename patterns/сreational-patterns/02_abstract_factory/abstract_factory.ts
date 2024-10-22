/*
  Абстрактная фабрика прзволяет создавать семества обектов без привязки к конкретным обектам


*/
// Интерфейс для абстрактного продукта "Фигура"
interface Shape {
  draw(): void;
}

// Конкретные продукты - разные типы фигур
class Circle implements Shape {
  draw(): void {
    console.log("Рисуем круг");
  }
}

class Square implements Shape {
  draw(): void {
    console.log("Рисуем квадрат");
  }
}

class Triangle implements Shape {
  draw(): void {
    console.log("Рисуем треугольник");
  }
}

interface ShapeFactory {
  createShape(): Shape;
}

class CircleFactory implements ShapeFactory {
  createShape(): Shape {
    return new Circle();
  }
}

class SquareFactory implements ShapeFactory {
  createShape(): Shape {
    return new Square();
  }
}

class TriangleFactory implements ShapeFactory {
  createShape(): Shape {
    return new Triangle();
  }
}

function drawShape(factory: ShapeFactory) {
  const shape = factory.createShape();
  shape.draw();
}

const circleFactory = new CircleFactory();
drawShape(circleFactory);

const squareFactory = new SquareFactory();
drawShape(squareFactory);

const triangleFactory = new TriangleFactory();
drawShape(triangleFactory);
