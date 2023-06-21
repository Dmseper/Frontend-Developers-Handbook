// Позволяет объектам с несовместимыми интерфейсами работать вместе

// Описание: Вам необходимо интегрировать новую платежную систему в существующую систему электронной коммерции.
// Однако, новая платежная система имеет отличный от текущей системы интерфейс, и вам нужно преобразовать интерфейс
// новой системы в интерфейс, который соответствует требованиям текущей системы. Для этого использовать паттерн "Адаптер" (Adapter).


interface PaymentSystem {
  processPayment(amount: number): void;
}

class CurrentPaymentSystem implements PaymentSystem {
  processPayment(amount: number): void {
    console.log(`Обработка платежа через текущую платежную систему на сумму ${amount}`);
  }
}

// Интерфейс новой платежной системы
interface NewPaymentSystem {
  makePayment(totalAmount: number): void;
}

// Адаптер для новой платежной системы
class NewPaymentSystemAdapter implements PaymentSystem {
  private newPaymentSystem: NewPaymentSystem;

  constructor(newPaymentSystem: NewPaymentSystem) {
    this.newPaymentSystem = newPaymentSystem;
  }

  processPayment(amount: number): void {
    const totalAmount = this.convertAmount(amount);
    this.newPaymentSystem.makePayment(totalAmount);
  }

  private convertAmount(amount: number): number {
    // Логика преобразования суммы для новой платежной системы
    return amount * 1.2;
  }
}

// Новая платежная система
class NewPaymentGateway implements NewPaymentSystem {
  makePayment(totalAmount: number): void {
    console.log(`Обработка платежа через новую платежную систему на сумму ${totalAmount}`);
  }
}


const currentPaymentSystem = new CurrentPaymentSystem();
currentPaymentSystem.processPayment(100);
// Обработка платежа через текущую платежную систему на сумму 100

const newPaymentSystem = new NewPaymentGateway();
const newPaymentSystemAdapter = new NewPaymentSystemAdapter(newPaymentSystem);
newPaymentSystemAdapter.processPayment(100);

// Обработка платежа через новую платежную систему на сумму 120
