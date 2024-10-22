/*
  Фабричный метод — ообщий интерфейс для создания в базовом классе, производные классы решают какой оименно обект создавать

  В паттерне "Фабрика" родительский класс (супер-класс) отвечает за определение публичного интерфейса производных объектов, а подкласс — за создание конкретных "продуктовых" объектов.
  Суть в том, что реализация специфических свойств продукта делегируется подклассу фабрики. Другим словами, именно в подклассе фабрики определяется, какой продукт создается.

  Применение: когда неоходимо создавать множество однотипных объенктов, с одинаковой структурой, но разными данными
*/


interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
    console.log('Drawing a Circle');
  }
}

class Square implements Shape {
  draw() {
    console.log('Drawing a Square');
  }
}

class Triangle implements Shape {
  draw() {
    console.log('Drawing a Triangle');
  }
}

class ShapeFactory {
  createShape(shapeType: string): Shape {
    if (shapeType === 'circle') {
      return new Circle();
    } else if (shapeType === 'square') {
      return new Square();
    } else if (shapeType === 'triangle') {
      return new Triangle();
    } else {
      throw new Error('Unknown shape type');
    }
  }
}

function clientCode(factory: ShapeFactory, shapeType: string) {
  const shape = factory.createShape(shapeType);
  shape.draw();
}

const factory = new ShapeFactory();

clientCode(factory, 'circle');
clientCode(factory, 'square');
clientCode(factory, 'triangle');
