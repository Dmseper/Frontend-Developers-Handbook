interface IAuth {
  typeOfOperations: Operations
  password: string
}
enum Operations {
  LOGIN= "login",
  LOGOUT="logout",
  REGISTER="register",
}

enum Message {
  REGISTER_CORRECT = "Success: new user added",
  PASSWORD_CORRECT= "Success: user logged in",
  PASSWORD_UNCORRECT= "Fail: already logged in",
  USER_EXIST= "Fail: user already exists",
  USER_LOGGED= "Fail: already logged in",
  USER_NOT_FOUND ="Fail: no such user",
  USER_ALREADY_LOGOUT ="Fail: already logged out",
  USER_LOGOUT="Success: user logged out",
}
class Auth {

  private _userData: Map<string, IAuth> = new Map() // logig / password

  constructor(authorization: Array<string>) {

    authorization.forEach(value => {
      let [typeOfOperations, login, password] = value.split(' ');
      //REGISTER
      if (typeOfOperations === Operations.REGISTER) {
        if (!this.checkIsUserRegistered(login)) {
          this._userData.set(login, {typeOfOperations: Operations.REGISTER, password})
          console.log(Message.REGISTER_CORRECT)
          // пользователь зарегестрирован
        } else {
          console.log(Message.USER_EXIST)
        }
      }
      //LOGIN
      if (typeOfOperations === Operations.LOGIN) {
        if (!this.checkIsUserRegistered(login)) {
          console.log(Message.USER_NOT_FOUND)
          return
        }
        if (this.checkIsCorrectPassword(login, password)) {
          console.log(Message.PASSWORD_CORRECT)
          return;
        }
        else console.log(Message.PASSWORD_UNCORRECT)

        if (this.checkIsUserInSystem(login)) {
          console.log(Message.USER_LOGGED)
          return;
        }

      }
      //LOGOUT
      if (typeOfOperations === Operations.LOGOUT) {
        if (!this.checkIsUserRegistered(login)) {
          console.log(Message.USER_NOT_FOUND)
          return
        }
        if (!this.checkIsUserInSystem(login)) {
          console.log(Message.USER_ALREADY_LOGOUT)
        }
        else console.log(Message.USER_LOGOUT)
      }

    })
  }

  checkIsUserRegistered(login:string) {
    return this._userData.has(login)
  }
  checkIsUserInSystem(login:string){
    return this._userData.get(login)?.typeOfOperations === Operations.LOGIN
  }
  checkIsCorrectPassword(login:string, password:string) {
    return this._userData.get(login)?.password === password
  }
  // loginUser(login:string, password: string) {
  //   this._userData.set(login,{typeOfOperations:Operations.LOGIN, password})
  // }
}

const users: Array<string> = [
  "register vasya 12345",
  "login vasya 1234",
  "login vasya 12345",
  "login anakin C-3PO",
  "logout vasya",
  "logout vasya",
]

const login = new Auth(users)