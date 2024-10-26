// Задача: Управление процессом сборки компьютера с использованием паттерна "Фасад".
//
//   Описание: Вы работаете в компании, которая занимается сборкой и настройкой компьютеров.
//   Ваша задача - реализовать систему управления процессом сборки компьютера с помощью паттерна "Фасад"
//   . Вам нужно упростить процесс сборки, скрыв сложность и взаимодействие с различными компонентами компьютера.


class ComputerBuilder {
  private processor: Processor;
  private memory: Memory;
  private storage: Storage;
  private graphicsCard: GraphicsCard;
  private powerSupply: PowerSupply;

  constructor() {
    this.processor = new Processor();
    this.memory = new Memory();
    this.storage = new Storage();
    this.graphicsCard = new GraphicsCard();
    this.powerSupply = new PowerSupply();
  }

  public assembleComputer(): void {
    this.processor.install();
    this.memory.install();
    this.storage.install();
    this.graphicsCard.install();
    this.powerSupply.install();
  }

  public testComputer(): void {
    // Реализация кода для тестирования компьютера
  }

  public packageComputer(): void {
    // Реализация кода для упаковки компьютера
  }
}

class Processor {
  public install(): void {
    // Реализация кода для установки процессора
  }
}

class Memory {
  public install(): void {
    // Реализация кода для установки памяти
  }
}

class Storage {
  public install(): void {
    // Реализация кода для установки хранилища
  }
}

class GraphicsCard {
  public install(): void {
    // Реализация кода для установки графической карты
  }
}

class PowerSupply {
  public install(): void {
    // Реализация кода для установки блока питания
  }
}


const computerBuilder = new ComputerBuilder();

computerBuilder.assembleComputer(); // Собрать компьютер, установив процессор, память, хранилище, графическую карту и блок питания

computerBuilder.testComputer(); // Протестировать компьютер

computerBuilder.packageComputer(); // Упаковать компьютер


