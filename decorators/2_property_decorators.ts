

const logProperty = (target: Object, propertyKey: string | symbol) => {
  console.log(propertyKey)
}



class User {

  //Декоратор свойства
  @logProperty
  secret: number
  constructor(public userName: string, public age: number) {
  }

  getUser ():string {
    return `${this.userName}`
  }
}

const ivan = new User("Ivan", 23)
console.log(ivan.getUser())

let tom = new User("Alex", 44);
let bob = new User("Vlad", 44);
tom.getUser();
bob.getUser();

