// Есть система управления задачами (Task Management System), в которой пользователь может создавать различные типы задач,
// такие как задачи на разработку, тестирование, дизайн и т.д.
// Реализовать паттерн "Посетитель" для обработки каждого типа задачи и выполнения определенных действий в зависимости от типа задачи.


// Интерфейс посетителя
interface TaskVisitor {
  visitDevelopmentTask(task: DevelopmentTask): void;

  visitTestingTask(task: TestingTask): void;

  // Добавьте методы посещения для других типов задач
}

// Базовый класс задачи
abstract class Task {
  abstract accept(visitor: TaskVisitor): void;
}

// Конкретный класс задачи на разработку
class DevelopmentTask extends Task {
  accept(visitor: TaskVisitor) {
    visitor.visitDevelopmentTask(this);
  }
}

// Конкретный класс задачи на тестирование
class TestingTask extends Task {
  accept(visitor: TaskVisitor) {
    visitor.visitTestingTask(this);
  }
}

// Конкретный посетитель, который выполняет действия в зависимости от типа задачи
class TaskActionVisitor implements TaskVisitor {
  visitDevelopmentTask(task: DevelopmentTask) {
    console.log("Выполняются действия для задачи на разработку");
  }

  visitTestingTask(task: TestingTask) {
    console.log("Выполняются действия для задачи на тестирование");
  }

  // Реализуйте методы посещения для других типов задач
}

// Использование паттерна посетитель
const tasks: Task[] = [new DevelopmentTask(), new TestingTask()];

const taskActionVisitor = new TaskActionVisitor();

tasks.forEach((task) => {
  task.accept(taskActionVisitor);
});
