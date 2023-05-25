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