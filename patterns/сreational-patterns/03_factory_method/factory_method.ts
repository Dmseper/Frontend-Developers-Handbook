// Определяет общий интерфейс для создания объектов в суперклассе,
// позволяя подклассам изменять тип создаваемых объектов

// Используя паттерн «Фабричный метод». Реализовать проект «Заводы по производству автомобилей».
// В проекте должно быть реализована возможность создавать
// автомобили различных типов на разных заводах.

// Абстрактный класс для автомобилей
abstract class Car {
  abstract getModel(): string;
  abstract getEngine(): string;
  abstract getPrice(): number;
}

// Конкретные классы автомобилей
class Sedan extends Car {
  getModel(): string {
    return "Sedan";
  }
  getEngine(): string {
    return "1.6L";
  }
  getPrice(): number {
    return 20000;
  }
}

class SUV extends Car {
  getModel(): string {
    return "SUV";
  }
  getEngine(): string {
    return "2.0L";
  }
  getPrice(): number {
    return 30000;
  }
}

// Абстрактный класс фабрики по производству автомобилей
abstract class CarFactory {
  abstract createCar(): Car;

  // Фабричный метод, который используется для создания автомобилей
  produceCar(): Car {
    const car = this.createCar();
    console.log(`Producing ${car.getModel()}...`);
    console.log(`Engine: ${car.getEngine()}`);
    console.log(`Price: $${car.getPrice()}`);
    return car;
  }
}

class SedanFactory extends CarFactory {
  createCar(): Car {
    return new Sedan();
  }
}

class SUVFactory extends CarFactory {
  createCar(): Car {
    return new SUV();
  }
}

// Использование
const sedanFactory = new SedanFactory();
const suvFactory = new SUVFactory();

const sedan = sedanFactory.produceCar();

// Producing Sedan...
// Engine: 1.6L
// Price: $20000

const suv = suvFactory.produceCar();

// Producing SUV...
// Engine: 2.0L
// Price: $30000
