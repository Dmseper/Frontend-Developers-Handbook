Принцип единственной ответственности (Single Responsibility Principle, SRP) - это один из пяти принципов SOLID. Он
утверждает, что класс должен иметь только одну причину для изменения, то есть каждый класс должен быть ответственным
только за одну часть функциональности программы.

Пример нарушения принципа единственной ответственности:
```typescript
// Нарушение принципа единственной ответственности

const http = {send: () => ({})};

const generateId = () => Date.now() * Math.random();

class User {
  id: number;
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.id = generateId();
    this.username = username;
    this.password = password;
  }
  save(user: User) {
    // сохранение пользователя в бд
  }
  log(user: User) {
    console.log(user)
  }
  send(user: User) {
    return http.send()
  }
}
```

В этом примере класс `User` нарушает принцип единственной ответственности, так как он содержит несколько различных
функций, которые выполняют разные действия

В данном случае, лучше было бы разделить класс `User` на несколько отдельных классов, каждый из которых бы отвечал
только за одну функциональность. Например:

```typescript
// Соблюдение принципа единственной ответственности
const http = {send: () => ({})};

const generateId = () => Date.now() * Math.random();

class User {
  id: number;
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.id = generateId();
    this.username = username;
    this.password = password;
  }
}

class UserRepository {
  save(user: User) {
    // сохранение пользователя в бд
  }
}

class UserLogger {
  log(user: User) {
    console.log(user)
  }
}

class UserController {
  send(user: User) {
    return http.send()
  }
}
```
