// Декораторы представляют функции, которые могут применяться к классам, методам,
// методом доступа (геттерам и сеттерам), свойствам, параметрам.

// Декораторы являются инструментом декларативного программирования, они позволяют добавить к классам и
// их членам метаданные и тем самым изменить их поведение без изменения их кода.

// фукнция классового декоратора должна принимать конструктор декрируемой сущности
// если декоратор класса вовращает значение, то он заменит объявление класса с помощью предоставленного конструктора
// замена конструктора приводит к полной замене всех свойств и методов класса.


//Декоратор класса
const logClass = (constructor: Function) => {
  console.log(constructor)

  let newConstructor: Function = function (name: string) {
    console.log("Создание нового экземпляра");
    this.name = name;
    this.age = 23;
    this.getUser = function (): void {
      console.log(this.name, this.age);
    }
  }
  return newConstructor;
}


@logClass
class User {

  constructor(public userName: string, public age: number) {
  }

  getUser(): string {
    return `${this.userName}`
  }
}

const ivan = new User("Ivan", 23)
console.log(ivan.getUser())

let alex = new User("Alex", 44);
let vlad = new User("Vlad", 44);
alex.getUser();
vlad.getUser();

