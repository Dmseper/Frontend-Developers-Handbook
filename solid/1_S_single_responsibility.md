Принцип единственной ответственности (Single Responsibility Principle, SRP) - это один из пяти принципов SOLID. Он утверждает, что класс должен иметь только одну причину для изменения, то есть каждый класс должен быть ответственным только за одну часть функциональности программы.

пример на TypeScript, в котором нарушается принцип единственной ответственности:

```typescript
// Нарушение принципа единственной ответственности
class Order {
  private items: string[];

  constructor() {
    this.items = [];
  }

  addItem(item: string): void {
    this.items.push(item);
    console.log(`${item} добавлен в заказ`);
  }

  removeItem(item: string): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${item} удален из заказа`);
    } else {
      console.log(`${item} не найден в заказе`);
    }
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.items) {
      // Логика для вычисления общей стоимости заказа
      total += 10; // Предположим, все товары стоят 10 единиц валюты
    }
    return total;
  }

  saveToDatabase(): void {
    // Логика для сохранения заказа в базу данных
    console.log('Заказ сохранен в базе данных');
  }

  sendConfirmationEmail(): void {
    // Логика для отправки электронной почты с подтверждением заказа
    console.log('Подтверждение заказа отправлено на электронную почту');
  }
}

const order = new Order();
order.addItem('Товар 1');
order.addItem('Товар 2');
order.removeItem('Товар 3'); // Товар 3 не найден в заказе
console.log('Общая стоимость заказа:', order.calculateTotal());
order.saveToDatabase();
order.sendConfirmationEmail();
```

В этом примере класс `Order` нарушает принцип единственной ответственности, так как он содержит несколько различных функций, которые выполняют разные действия:

1. Методы `addItem` и `removeItem` отвечают за добавление и удаление товаров из заказа.

2. Метод `calculateTotal` отвечает за вычисление общей стоимости заказа.

3. Метод `saveToDatabase` отвечает за сохранение заказа в базе данных.

4. Метод `sendConfirmationEmail` отвечает за отправку электронной почты с подтверждением заказа.

В данном случае, лучше было бы разделить класс `Order` на несколько отдельных классов, каждый из которых бы отвечал только за одну функциональность. Например:

```typescript
// Соблюдение принципа единственной ответственности
class Order {
  private items: string[];

  constructor() {
    this.items = [];
  }

  addItem(item: string): void {
    this.items.push(item);
    console.log(`${item} добавлен в заказ`);
  }

  removeItem(item: string): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${item} удален из заказа`);
    } else {
      console.log(`${item} не найден в заказе`);
    }
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.items) {
      // Логика для вычисления общей стоимости заказа
      total += 10; // Предположим, все товары стоят 10 единиц валюты
    }
    return total;
  }
}

class OrderRepository {
  saveToDatabase(order: Order): void {
    // Логика для сохранения заказа в базе данных
    console.log('Заказ сохранен в базе данных');
  }
}

class OrderNotifier {
  sendConfirmationEmail(order: Order): void {
    // Логика для отправки электронной почты с подтверждением заказа
    console.log('Подтверждение заказа отправлено на электронную почту');
  }
}

const order = new Order();
order.addItem('Товар 1');
order.addItem('Товар 2');
order.removeItem('Товар 3'); // Товар 3 не найден в заказе
console.log('Общая стоимость заказа:', order.calculateTotal());

const orderRepository = new OrderRepository();
orderRepository.saveToDatabase(order);

const orderNotifier = new OrderNotifier();
orderNotifier.sendConfirmationEmail(order);
```

Теперь мы разделили класс `Order` на три отдельных класса: `Order` для управления товарами в заказе и вычисления общей стоимости, `OrderRepository` для сохранения заказа в базе данных и `OrderNotifier` для отправки электронной почты с подтверждением заказа. Каждый класс теперь отвечает только за свою уникальную ответственность, что соответствует принципу единственной ответственности.