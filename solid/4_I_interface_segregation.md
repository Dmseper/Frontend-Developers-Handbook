пример на TypeScript, в котором будет принцип разделения интерфейсов (Interface Segregation Principle, ISP).

Принцип разделения интерфейсов утверждает, что клиенты не должны зависеть от интерфейсов, которые они не используют. Иными словами, интерфейсы должны быть компактными и охватывать только те методы, которые реально используются клиентами.

Пример нарушения принципа разделения интерфейсов:

```typescript
// Нарушение принципа разделения интерфейсов
interface Vehicle {
  start(): void;
  stop(): void;
  accelerate(): void;
  brake(): void;
  playMusic(): void;
}

// Класс Car реализует интерфейс Vehicle, но не использует метод playMusic
class Car implements Vehicle {
  start(): void {
    console.log('Автомобиль заведен');
  }

  stop(): void {
    console.log('Автомобиль остановлен');
  }

  accelerate(): void {
    console.log('Автомобиль разгоняется');
  }

  brake(): void {
    console.log('Автомобиль тормозит');
  }

  playMusic(): void {
    console.log('Включена музыка');
  }
}

// Класс Bicycle реализует интерфейс Vehicle, но не использует метод playMusic
class Bicycle implements Vehicle {
  start(): void {
    console.log('Велосипед тронулся');
  }

  stop(): void {
    console.log('Велосипед остановлен');
  }

  accelerate(): void {
    console.log('Велосипед ускоряется');
  }

  brake(): void {
    console.log('Велосипед тормозит');
  }

  playMusic(): void {
    console.log('Велосипед не имеет музыки');
  }
}
```

В этом примере интерфейс `Vehicle` описывает несколько методов, включая `playMusic`, которые, возможно, не используются всеми клиентами, такими как классы `Car` и `Bicycle`. Это приводит к нарушению принципа разделения интерфейсов, так как клиенты вынуждены реализовывать методы, которые для них не имеют смысла.

Чтобы исправить нарушение принципа разделения интерфейсов, мы должны разделить интерфейс `Vehicle` на более специфичные интерфейсы, чтобы каждый класс реализовал только те методы, которые он реально использует:

```typescript
// Исправление нарушения принципа разделения интерфейсов
interface Vehicle {
  start(): void;
  stop(): void;
  accelerate(): void;
  brake(): void;
}

interface MusicPlayer {
  playMusic(): void;
}

class Car implements Vehicle, MusicPlayer {
  start(): void {
    console.log('Автомобиль заведен');
  }

  stop(): void {
    console.log('Автомобиль остановлен');
  }

  accelerate(): void {
    console.log('Автомобиль разгоняется');
  }

  brake(): void {
    console.log('Автомобиль тормозит');
  }

  playMusic(): void {
    console.log('Включена музыка');
  }
}

class Bicycle implements Vehicle {
  start(): void {
    console.log('Велосипед тронулся');
  }

  stop(): void {
    console.log('Велосипед остановлен');
  }

  accelerate(): void {
    console.log('Велосипед ускоряется');
  }

  brake(): void {
    console.log('Велосипед тормозит');
  }
}
```

Теперь мы разделили интерфейс `Vehicle` на два интерфейса: `Vehicle`, который содержит основные методы для управления транспортными средствами, и `MusicPlayer`, который содержит методы для управления музыкой. Каждый класс теперь реализует только те методы, которые ему необходимы, что соответствует принципу разделения интерфейсов.