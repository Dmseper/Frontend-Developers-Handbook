// Задача: Создание системы управления роботами с возможностью добавления дополнительных функций с использованием паттерна "Декоратор".
//
//  Описание: Вам необходимо разработать систему управления роботами, которая позволяет добавлять дополнительные
//  функции и возможности к базовым роботам без изменения их основной функциональности. Для этого вы решаете
//  использовать паттерн "Декоратор", который позволяет динамически добавлять новые функции к объектам.

abstract class Robot {
  public abstract getDescription(): string;

  public abstract performTask(): void;
}

class VacuumRobot extends Robot {
  public getDescription(): string {
    return "Робот-пылесос";
  }

  public performTask(): void {
    console.log("Выполняю задачу: Пылесосю пол");
  }
}

class MoppingRobot extends Robot {
  public getDescription(): string {
    return "Робот-моющая машина";
  }

  public performTask(): void {
    console.log("Выполняю задачу: Мою пол");
  }
}

abstract class Decorator extends Robot {
  protected robot: Robot;

  constructor(robot: Robot) {
    super();
    this.robot = robot;
  }
}

class SmartMode extends Decorator {
  public getDescription(): string {
    return this.robot.getDescription() + ", умный режим";
  }

  public performTask(): void {
    this.robot.performTask();
    console.log("Активирую умный режим");
  }
}

class CollisionProtection extends Decorator {
  public getDescription(): string {
    return this.robot.getDescription() + ", защита от столкновений";
  }

  public performTask(): void {
    this.robot.performTask();
    console.log("Активирую защиту от столкновений");
  }
}

let robot: Robot = new VacuumRobot();
console.log(robot.getDescription()); // Выводит "Робот-пылесос"
robot.performTask(); // Выполняет задачу: Пылесосю пол

robot = new SmartMode(robot);
console.log(robot.getDescription()); // Выводит "Робот-пылесос, умный режим"
robot.performTask(); // Выполняет задачу: Пылесосю пол, активирую умный режим

robot = new CollisionProtection(robot);
console.log(robot.getDescription()); // Выводит "Робот-пылесос, умный режим, защита от столкновений"
robot.performTask(); // Выполняет задачу: Пылесосю пол, активирую умный режим, активирую защиту от столкновений

