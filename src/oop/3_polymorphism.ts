class Person {
  constructor(protected _firstName: string, private _lastName: string, private _age: number) {
  }

  greeting() {
    console.log(`Привет, меня зовут ${this._firstName}`)
  }
}

class Employee extends Person {

  constructor(_firstName: string, _lastName: string, _age: number, private _inn: number, private _number: number, private _snils: string) {
    super(_firstName, _lastName, _age)
  }

  greeting() {
    console.log(`Привет, я работник и меня зовут ${this._firstName}`)
  }
}

class Developer extends Employee {
  constructor(_firstName: string, _lastName: string, _age: number, _inn: number, _number: number, _snils: string, private _level: string, private _language: string) {
    super(_firstName, _lastName, _age, _inn, _number, _snils)
  }

  greeting() {
    console.log(`Привет, я разработчик и меня зовут ${this._firstName}`)
  }
}


const Alex = new Developer('Alex', 'Ivanov', 23, 1234, 88003332211, 'ABCS213ASD', 'Middle', 'front-end')
const Ivan = new Employee('Ivan', 'Sidorov', 23, 1234, 88003332211, 'ABCS213ASD')
const Petr = new Person('Petr', 'Petrov', 23)

Alex.greeting()
Ivan.greeting()
Petr.greeting()

const personList: Person[] = [Alex, Ivan, Petr]

function massGreeting(persons: Person[]) {
  persons.forEach((item: Person) => {
    item.greeting()
  })
}

massGreeting(personList)