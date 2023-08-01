// Релизовать приложение для путешественников, которое предлагает различные места для посещения.
// Используя паттерн "Посетитель" для обработки различных типов мест и предоставления пользователю соответствующей информации о каждом месте.

// Интерфейс посетителя
interface Visitor {
  visitPlaceA(place: PlaceA): void;

  visitPlaceB(place: PlaceB): void;

  // Добавьте методы посещения для других типов мест
}

// Базовый класс места
abstract class Place {
  abstract accept(visitor: Visitor): void;
}

// Конкретный класс места A
class PlaceA extends Place {
  accept(visitor: Visitor) {
    visitor.visitPlaceA(this);
  }
}

// Конкретный класс места B
class PlaceB extends Place {
  accept(visitor: Visitor) {
    visitor.visitPlaceB(this);
  }
}

// Конкретный посетитель, который предоставляет информацию о месте
class InfoVisitor implements Visitor {
  visitPlaceA(place: PlaceA) {
    console.log("Место A: Информация о месте A");
  }

  visitPlaceB(place: PlaceB) {
    console.log("Место B: Информация о месте B");
  }

  // Реализуйте методы посещения для других типов мест
}

// Использование паттерна посетитель
const places: Place[] = [new PlaceA(), new PlaceB()];

const infoVisitor = new InfoVisitor();

places.forEach((place) => {
  place.accept(infoVisitor);
});
