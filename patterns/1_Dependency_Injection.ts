class User {
  constructor(public userName: string, public age: number) {
  }
}

interface UserRepo {
  getUser: () => User[]
}

class UserMongoDBRepo implements UserRepo {
  getUser(): User[] {
    console.log('Подключение к Mongo')
    return [{age: 15, userName: 'Alex'}]
  }
}

class UserPostgresRepo implements UserRepo {
  getUser(): User[] {
    console.log('Подключение к Postgres')
    return [{age: 13, userName: 'Ivan'}]
  }
}

class UserService {
  constructor(public userRepo: UserRepo) {
  }

  filterUserByAge(age: number) {
    const users = this.userRepo.getUser()
    console.log(users)
  }
}

const userService = new UserService(new UserPostgresRepo())
userService.filterUserByAge(15)