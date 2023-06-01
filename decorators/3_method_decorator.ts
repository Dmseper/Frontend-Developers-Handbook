
interface PropertyDescriptor{
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get? (): any;
  set? (v: any): void;
}

function deprecated(target: any, propertyName: string, descriptor: PropertyDescriptor){
  console.log("Method is deprecated");
}

//Декоратор readable с помощью выражения descriptor.writable = false; устанавливает, что метод,
//к которому применяется данный декоратор, не может быть изменен.

// function readable (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
//   descriptor.writable = false;
// }
//
//
// class User {
//
//   name: string;
//   constructor(name: string){
//     this.name = name;
//   }
//
//   @readable
//   print():void{
//     console.log(this.name);
//   }
// }
// let tom = new User("Tom");
// tom.print = function(){console.log("print has been changed");} // не имеет смысла и не будет работать.
// // Однако если бы декоратор не применялся, то инструкция сработала бы.
// tom.print();  // Tom
//

function logMethod (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(propertyKey)
}


class User {

  constructor(public userName: string, public age: number) {
  }
  @logMethod
  public getUser ():string {
    return `${this.userName}`
  }
}

const ivan = new User("Ivan", 23)
console.log(ivan.getUser())

let alex = new User("Alex", 44);
let vlad = new User("Vlad", 44);
alex.getUser();
vlad.getUser();