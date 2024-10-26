// Интерфейс для базы данных
interface Database {
  query(sql: string): any;
}

// Конкретная реализация базы данных
class MySQLDatabase implements Database {
  query(sql: string) {
    console.log(`Выполняется запрос к MySQL: ${sql}`);
  }
}

// Класс UserService, которому требуется база данных
class UserService {
  private database: Database;

  // Зависимость передаётся через конструктор
  constructor(database: Database) {
    this.database = database;
  }

  getUserData(userId: number) {
    return this.database.query(`SELECT * FROM users WHERE id = ${userId}`);
  }
}

// Использование
const mySQLDatabase = new MySQLDatabase();
const userService = new UserService(mySQLDatabase); // Внедрение зависимости
userService.getUserData(1);
