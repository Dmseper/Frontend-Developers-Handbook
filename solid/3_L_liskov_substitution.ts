// Должна быть возможность вместо базового (родительского) типа (класса) подставить любой его подтип (класс-наследник),
// при этом работа программы не должна измениться.

interface Figure {
  setWidth(width: number) :void
  setHeight(height: number):void
  getArea(): number
}
class Rectangle implements Figure{

  constructor(public width: number,public height: number) {
  }
  setWidth(width: number) {
    this.width = width
  }
  setHeight(height: number) {
    this.height = height
  }

  getArea(): number {
    return this.width * this.height
  }
}

class Square  implements Figure{
  width: number = 0
  height: number = 0
  constructor(public size: number) {}
  setWidth(width: number) {
    this.width = width
    this.height = width
  }
  setHeight(height: number) {
    this.height = height
    this.width = height
  }

  getArea(): number {
    return this.width * this.height;
  }
}
