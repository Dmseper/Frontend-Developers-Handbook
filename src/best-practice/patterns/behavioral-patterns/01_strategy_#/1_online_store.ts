// Задача: Реализация системы расчета доставки в интернет-магазине.

// Описание: В интернет-магазине необходимо реализовать систему расчета стоимости доставки заказов,
// которая будет поддерживать различные стратегии расчета в зависимости от выбранного способа доставки.
// Стратегии могут включать расчет доставки по расстоянию, весу, типу товара и другим параметрам.
// Используя паттерн "Стратегия" (Strategy), необходимо реализовать гибкую систему расчета доставки,
// которая будет легко расширяема новыми стратегиями.

// Интерфейс стратегии расчета доставки
interface DeliveryStrategy {
  calculateCost(distance: number, weight: number): number;
}

// Конкретная стратегия расчета доставки по расстоянию
class DistanceDeliveryStrategy implements DeliveryStrategy {
  calculateCost(distance: number, weight: number): number {
    // Расчет стоимости доставки по расстоянию
    return distance * 5; // стоимость 1 км доставки - 5 единиц
  }
}

// Конкретная стратегия расчета доставки по весу
class WeightDeliveryStrategy implements DeliveryStrategy {
  calculateCost(distance: number, weight: number): number {
    // Расчет стоимости доставки по весу
    return weight * 10; //  стоимость 1 кг доставки - 10 единиц
  }
}

// Класс заказа
class Order {
  private distance: number;
  private weight: number;
  private deliveryStrategy: DeliveryStrategy;

  constructor(distance: number, weight: number, deliveryStrategy: DeliveryStrategy) {
    this.distance = distance;
    this.weight = weight;
    this.deliveryStrategy = deliveryStrategy;
  }

  setDeliveryStrategy(deliveryStrategy: DeliveryStrategy) {
    this.deliveryStrategy = deliveryStrategy;
  }

  calculateDeliveryCost(): number {
    return this.deliveryStrategy.calculateCost(this.distance, this.weight);
  }
}


const order = new Order(100, 2, new DistanceDeliveryStrategy());
console.log(order.calculateDeliveryCost()); // 500 (100 * 5)

order.setDeliveryStrategy(new WeightDeliveryStrategy());
console.log(order.calculateDeliveryCost()); // 20 (2 * 10)
