// Задача:
//Реализовать программный продукт, выполняющий подсчет заработной платы сотрудника за месяц
// в зависимости от типа его занятости – полная рабочая неделя (40 часов),
// сокращенная рабочая неделя для лиц от 16 до 18 лет (36 часов) и сокращенная рабочая неделя
// для лиц младше 16 лет (24 часа). Стоимость часа работы выбрать самостоятельно.
// При разработке использовать поведенческий паттерн проектирования «Стратегия».


enum SalaryByHour {
  FULL_TIME = 400,
  SHORTED = 360,
  SMALLEST = 200

}

// Интерфейс стратегии расчета з/п
interface Wages {
  calculateWages(): number;
}

// Конкретная стратегия расчета доставки по расстоянию
class FullTime implements Wages {
  calculateWages(): number {
    const hours = 40
    return SalaryByHour.FULL_TIME * hours;
  }
}

class SmallestWeek implements Wages {
  calculateWages(): number {
    const hours = 23
    return SalaryByHour.SMALLEST * hours;
  }
}


class ShortedWeek implements Wages {

  calculateWages(): number {
    const hours = 36
    return SalaryByHour.SHORTED * hours;
  }
}

class Payday {

  private paydayStrategy: Wages;

  constructor(paydayStrategy: Wages) {
    this.paydayStrategy = paydayStrategy;
  }

  setPaydayStrategy(paydayStrategy: Wages) {
    this.paydayStrategy = paydayStrategy;
  }

  calculatePayday(): number {
    return this.paydayStrategy.calculateWages();
  }
}


const payment = new Payday(new FullTime());
console.log(payment.calculatePayday());

payment.setPaydayStrategy(new ShortedWeek());
console.log(payment.calculatePayday());
