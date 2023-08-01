//#1 базовое задание класса
class User {

  //public - значение по умолчанию
  //private - элемент данного класса не может быть доступен за пределами классса
  //protected - доступ к элементам данного класса могут получить только наследники
  //readonly - элемент доступен только для чтения

  private name: string
  private age: number
  private nickname: string
  private password: string | number

  constructor(name: string, age: number, nickname: string, password: string | number) {
    this.name = name
    this.age = age
    this.nickname = nickname
    this.password = password
  }
}

const user = new User('Anton', 34, 'Tony', '1234')

console.log("user", user)


//#2  задание класса с начальными значениями

class Car {

  private brand: string
  private yearOfProduction: number = 2023
  private name: string = 'XC90'

  constructor(brand: string) {
    this.brand = brand
  }

  getYearOfProduction(): string {
    return `${this.name}: ${this.yearOfProduction}`
  }
}

const car = new Car('Volvo')

console.log("car1", car)
console.log("car1", car.getYearOfProduction())


//#3  сокращенная форма записи класса

class ShortUser {
  constructor(public name: string, public age: number, public nickname: string, public password: string | number) {
    this.name = name
    this.age = age
    this.nickname = nickname
    this.password = password
  }
}

const shortUser = new ShortUser('Vitalik', 22, 'Gamarjoba', '3456')
console.log("shortUser", shortUser)

//#4 аксессоры классов


class AccessorsWithUser {
  constructor(private name: string, private age: number = 20) {
    this.name = name
  }

  set myAge(age: number) {
    this.age = age
  }

  setAge(age: number) {
    this.age = age
  }
}

const accessorsWithUser = new AccessorsWithUser('Alex',)
console.log("accessorsWithUser", accessorsWithUser)
accessorsWithUser.myAge = 24
console.log("accessorsWithUser", accessorsWithUser)
accessorsWithUser.setAge(28)
console.log("accessorsWithUser", accessorsWithUser)

//#5 классы со статическими свойствами

class StaticUser {
  static country = 'Russia'

  constructor(public name: string, public age: number, public nickname: string, public password: string | number) {
    this.name = name
    this.age = age
    this.nickname = nickname
    this.password = password
  }

  getCountry() {
    return StaticUser.country
  }
}

const staticUser = new StaticUser('Vitalik', 22, 'Gamarjoba', '3456')
console.log("staticUser country", staticUser.getCountry())


//#6 наследование классов
// у классов наследников также можно переопределить методы
class InheritanceUser {
  constructor(public name: string, public age: number,) {
  }
}

class Alex extends InheritanceUser {
  name: string = 'Alexandr'

  constructor(age: number) {
    super(InheritanceUser.name, age);
  }
}

const inheritanceUser = new InheritanceUser('Ivan', 22,)
console.log("inheritanceUser", inheritanceUser)

const alex = new Alex(244)
console.log("alex", alex)

//#7 абстрактные классы - базовые классы, от которых наследуются другие(используется только для содания наследников)
// 1 особенность - абстрактный класс содержит детали реализации своих элементов(свойств и методов)
// 2 особенность - от данного типа класса напряму нельзя создать экземпляр


abstract class AbstractUser {
  constructor(public name: string, public age: number,) {
  }

  greet(): void {
    console.log(this.name)
  }

  abstract getPass(): string
}

class tempClass extends AbstractUser {
  name: string = 'Petr'

  constructor(age: number) {
    super(AbstractUser.name, age);
  }

  getPass(): string {
    return "test!!!";
  }
}

const abstractAlex = new tempClass(23)
console.log('abstractAlex', abstractAlex)
console.log('abstractAlex', abstractAlex.getPass())
abstractAlex.greet()