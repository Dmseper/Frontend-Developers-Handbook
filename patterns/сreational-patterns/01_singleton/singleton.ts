//Гарантирует, что у класса есть только один экземпляр,
//и предоставляет к нему глобалюную точку доступа


import {generateRandomNumber} from "../../../utils/generateArrayNumbers";

class DataBase {
  port?: number
  private static instance: DataBase
  constructor() {
    if(DataBase.instance) {
      return DataBase.instance
    }

    this.port = generateRandomNumber(1,100)
    DataBase.instance = this
  }

}

const db1 = new DataBase()
const db2 = new DataBase()

console.log(db1.port)
console.log(db2.port)