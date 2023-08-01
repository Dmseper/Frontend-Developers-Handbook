class Wheel {
  constructor(public _wheel: boolean = false) {
    this._wheel = !this._wheel
  }

  drive() {
    console.log('Колеса крутятся')
  }
}


class Engine {
  constructor(public _engine: boolean = false) {
    this._engine = !this._engine
  }

  drive() {
    console.log('Двигатель работает')
  }
}

//агрегация
class Conditioner {
  //В данном случае класс Conditioner находится вне зависимости от каких либо классов
  //Если удалится класс Car, то у удалятся зависимы классы Engine и Wheel
}

class Flat {
  conditioner: Conditioner

  constructor(conditioner: Conditioner) {
    this.conditioner = conditioner
  }
}


class Car {
  engine: Engine
  wheels: Wheel[]
  conditioner: Conditioner

  constructor(conditioner: Conditioner) {

    //Композиция
    this.conditioner = conditioner
    this.engine = new Engine()
    this.wheels = []
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
  }

  // делегирование

  drive() {
    this.engine.drive()
    this.wheels.forEach((item: Wheel) => {
      item.drive()
    })
  }
}

const xc90 = new Car()

xc90.drive()