const logProperty = (target: Object, propertyKey: string | symbol) => {
  console.log(propertyKey)
}


class User {

  //Декоратор свойства
  @logProperty
  secret: number

  @format
  name: string

  constructor(name: string, public age?: number) {
    this.name = name
  }

  getUser(): void {
    console.log(`${this.name}`)
  }
}

const ivan = new User("Ivan", 23)
ivan.getUser()

let alex = new User("Alex", 44);
let vlad = new User("Vlad", 44);
alex.getUser();
vlad.getUser();

let tom = new User("Tom");
tom.getUser();
tom.name = "Tommy";
tom.getUser();
tom.name = "To";
tom.getUser();

function format() {
  return function (target: Object, propertyKey: string) {
    let value: string;
    const getter = function () {
      return "Mr./Ms." + value;     // изменяем возвращаемое значение
    };
    const setter = function (newVal: string) {
      if (newVal.length > 2) {   // добавляем проверку на длину строки
        value = newVal
      }
    };
    // устанавливает геттер и сеттер для свойства
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    });
  }
}

