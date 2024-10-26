Принцип подстановки Барбары Лисков (Liskov Substitution Principle, LSP) - гласит, что наследуемый класс должен доплнять, а не замещать поведение базового класса.

Пример на TypeScript, в котором нарушается принцип подстановки Барбары Лисков:

```typescript
// Нарушение принципа подстановки Барбары Лисков

class Database {
  connect() {}
  read() {}
  write() {}
  joinTables() {}
}

class MySQLDatabase extends Database {
  connect() {}
  read() {}
  write() {}
  joinTables() {}
}

class MongoDatabase extends Database {
  connect() {}
  read() {}
  write() {}
  joinTables() {
    throw  new Error('У MongoDB нет такой возможности')
  }
}

function startApp(database: Database) {
  database.connect()
}
startApp(new MongoDatabase())
startApp(new MySQLDatabase())
```

Чтобы исправить нарушение принципа, необходимо сделать следющее:

```typescript

class Database {
  connect() {}
  read() {}
  write() {}
}

class SQLDatabase extends Database {
  joinTables() {}
}

class NOSQLDatabase extends Database {
  createIndex() {}
}

class MySQLDatabase extends SQLDatabase {
  connect() {}
  read() {}
  write() {}
  joinTables() {}
}

class MongoDatabase extends NOSQLDatabase {
  connect() {}
  read() {}
  write() {}
  createIndex() {}
  mergeDocuments() {}
}


function startApp(database: Database) {
  database.connect()
}
startApp(new MongoDatabase())
startApp(new MySQLDatabase())
```

