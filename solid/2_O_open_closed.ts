// Программные сущности должны быть открыты для расширения, но закрыты для модификации/изменения»

abstract class Figure {
  abstract getArea(): number
}

class Rectangle extends Figure {

  constructor(public width: number, public height: number) {
    super()
    this.height = height
    this.width = width

  }

  getArea(): number {
    return this.width * this.height
  }
}

class Square extends Figure {

  constructor(public size: number) {
    super()
    this.size = size
  }

  getArea(): number {
    return this.size * this.size;
  }
}

class AreaCalculator {
  constructor(public figures: Array<Rectangle | Square>) {
    this.figures = figures
  }

  getSumAreas() {
    return this.figures.reduce((counter: number, figure: Rectangle | Square) => {
      counter += figure.getArea()
      return counter
    }, 0)
  }
}

const areas = new AreaCalculator([new Rectangle(2, 2), new Square(4)])
console.log(areas.getSumAreas())

