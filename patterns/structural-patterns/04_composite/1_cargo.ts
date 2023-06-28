// Задача: Управление транспортировкой грузов с использованием паттерна "Компоновщик".
//
//  Описание: Вы работаете в компании, занимающейся логистикой и транспортировкой грузов.
//  Ваша задача - реализовать систему управления транспортировкой грузов с помощью паттерна "Компоновщик".
//  Вам нужно упростить процесс управления и контроля за различными группами грузов, которые могут состоять из подгрупп или отдельных элементов.

abstract class Cargo {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract getWeight(): number;
  public abstract print(): void;
}
class Container extends Cargo {
  private cargos: Cargo[] = [];

  public addCargo(cargo: Cargo): void {
    this.cargos.push(cargo);
  }

  public removeCargo(cargo: Cargo): void {
    const index = this.cargos.indexOf(cargo);
    if (index !== -1) {
      this.cargos.splice(index, 1);
    }
  }

  public getWeight(): number {
    let totalWeight = 0;
    for (const cargo of this.cargos) {
      totalWeight += cargo.getWeight();
    }
    return totalWeight;
  }

  public print(): void {
    console.log(`Container: ${this.name}`);
    for (const cargo of this.cargos) {
      cargo.print();
    }
  }
}

class Box extends Cargo {
  private weight: number;

  constructor(name: string, weight: number) {
    super(name);
    this.weight = weight;
  }

  public getWeight(): number {
    return this.weight;
  }

  public print(): void {
    console.log(`Box: ${this.name}, Weight: ${this.weight}kg`);
  }
}

class Pallet extends Cargo {
  private boxes: Box[] = [];

  public addBox(box: Box): void {
    this.boxes.push(box);
  }

  public getWeight(): number {
    let totalWeight = 0;
    for (const box of this.boxes) {
      totalWeight += box.getWeight();
    }
    return totalWeight;
  }

  public print(): void {
    console.log(`Pallet: ${this.name}`);
    for (const box of this.boxes) {
      box.print();
    }
  }
}

// Создание грузов
const box1 = new Box("Box 1", 10);
const box2 = new Box("Box 2", 15);
const box3 = new Box("Box 3", 20);

// Создание палеты и добавление в нее ящиков
const pallet1 = new Pallet("Pallet 1");
pallet1.addBox(box1);
pallet1.addBox(box2);

// Создание еще одного ящика
const box4 = new Box("Box 4", 12);

// Создание контейнера и добавление в него палеты и ящика
const container = new Container("Container");
container.addCargo(pallet1);
container.addCargo(box3);
container.addCargo(box4);

// Вывод информации о весе иерархии грузов
console.log(`Total Weight: ${container.getWeight()}kg`);

// Вывод информации о структуре иерархии грузов
container.print();

// Total Weight: 57kg
// Container: Container
// Pallet: Pallet 1
// Box: Box 1, Weight: 10kg
// Box: Box 2, Weight: 15kg
// Box: Box 3, Weight: 20kg
// Box: Box 4, Weight: 12kg