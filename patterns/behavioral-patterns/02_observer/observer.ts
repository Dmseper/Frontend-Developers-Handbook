// Задача: Реализация системы уведомлений в социальной сети.

// Описание: В социальной сети необходимо реализовать систему уведомлений, которая будет уведомлять пользователей о различных событиях,
// таких как новые сообщения, комментарии, лайки и другие активности. Используя паттерн "Наблюдатель" (Observer),
// необходимо создать гибкую систему,в которой пользователи могут подписываться на определенные
// типы уведомлений и получать их в режиме реального времени.


// Интерфейс наблюдателя
interface Observer {
  update(event: string): void;
}

// Класс пользователь
class User implements Observer {
  private username: string;

  constructor(name: string) {
    this.username = name;
  }

  update(event: string): void {
    console.log(`[${this.username}] Получено уведомление: ${event}`);
  }
}

// Класс социальная сеть (издатель)
class SocialNetwork {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(event: string): void {
    this.observers.forEach((observer) => {
      observer.update(event);
    });
  }
}

// Использование
const socialNetwork = new SocialNetwork();

const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

socialNetwork.subscribe(user1);
socialNetwork.subscribe(user2);
socialNetwork.subscribe(user3);

socialNetwork.notify("Новое сообщение");
// Output:
// [Alice] Получено уведомление: Новое сообщение
// [Bob] Получено уведомление: Новое сообщение
// [Charlie] Получено уведомление: Новое сообщение

socialNetwork.unsubscribe(user2);

socialNetwork.notify("Новый комментарий на вашем посте");
// Output:
// [Alice] Получено уведомление: Новый комментарий на вашем посте
// [Charlie] Получено уведомление: Новый комментарий на вашем посте
