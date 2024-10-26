class Person {
  constructor(private _firstName: string, private _lastName: string, private _age: number) {
  }

  set age(value: number) {
    if (value < 0) {
      this.age = 0
    } else {
      this._age = value
    }
  }

  get fullName() {
    return `ФИО: ${this._firstName} ${this._lastName}`
  }
}

class Employee extends Person {

  constructor(_firstName: string, _lastName: string, _age: number, private _inn: number, private _number: number, private _snils: string) {
    super(_firstName, _lastName, _age)
  }
}

class Developer extends Employee {
  constructor(_firstName: string, _lastName: string, _age: number, _inn: number, _number: number, _snils: string, private _level: string, private _language: string) {
    super(_firstName, _lastName, _age, _inn, _number, _snils)
  }
}


const Alex = new Developer('Alex', 'Ivanov', 23, 1234, 88003332211, 'ABCS213ASD', 'Middle', 'front-end')

console.log(Alex)
console.log(Alex.fullName)