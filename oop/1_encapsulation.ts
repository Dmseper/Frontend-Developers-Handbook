class DataBase {

  private _url: string
  private _port: number
  private _username: string
  private _password: string
  private _tables: Array<object>;
  constructor(url:string, port:number, username:string, password:string) {
    this._url = url
    this._port = port
    this._username = username
    this._password = password
    this._tables = []
  }
  public createNewTable(table:object) {
    this._tables.push(table)
  }
  public clearTables() {
    this._tables = []
  }

}

const DB = new DataBase('/',8888, 'Admin', '44444')

DB.createNewTable({name:'roles'})
DB.createNewTable({name:'users'})

console.log("DB", DB)
DB.clearTables()
console.log("DB", DB)