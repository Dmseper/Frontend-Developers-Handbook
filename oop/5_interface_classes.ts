// interface Reader {
//   read(url)
// }
// interface Writer {
//   write(data)
// }
//
// class FileClient implements Reader, Writer {
//   read(url) {
//   }
//   write(data) {
//   }
// }


interface Repository<T> {
  create: (obj: T)=> T;
  get: () => T;
  delete: (obj: T) => T;
  update: (obj: T) => T;

}

class User {
  constructor(public userName: string, public age: number) {
  }
}

class UserRepo implements Repository<User> {
  create(obj: User) {
    return obj
  }

  delete(obj: User) {
    return obj
  }

  get(): void {
    return undefined
  }

  update(obj: User) {
    return obj
  }

}

class  Car {}

class CarRepo implements  Repository<Car> {
  create(obj: Car): Car {
    return undefined;
  }

  delete(obj: Car): Car {
    return undefined;
  }

  get(): Car {
    return undefined;
  }

  update(obj: Car): Car {
    return undefined;
  }

}


// Specify generic type 'K' with key-word 'extends'
  class User1<T, K extends number> {

    constructor(public name: T, public age: K) {}

    public getPass(): string {
      return `${this.name}${this.age}`;
    }

    public getSecret(): number {
      return this.age**2;
    }
  }

const yauhen = new User1('Yauhen', 31);
const leo = new User1(123, 321);

/*
  Error:
  Argument of type '"20"' is not assignable to parameter of type 'number'
*/
const max = new User1('Max', '20');