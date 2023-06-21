// Вам необходимо разработать игру "Tower Defense", в которой игрок должен защищать свою базу
// от волн наступающих врагов. В игре должны быть различные типы врагов и башен, а также
// различные уровни сложности.Реализовать игру используя паттерн "Шаблонный метод" (Template Method).


// Базовый класс для врагов
abstract class Enemy {
  abstract spawn(): void;
  abstract move(): void;
  abstract attack(): void;

  // Шаблонный метод, определяющий порядок выполнения этапов игры
  playGame(): void {
    this.spawn();
    this.move();
    this.attack();
  }
}

// Конкретный класс врага - Зомби
class ZombieEnemy extends Enemy {
  spawn(): void {
    console.log('Зомби появился');
  }

  move(): void {
    console.log('Зомби движется по направлению к базе');
  }

  attack(): void {
    console.log('Зомби атакует базу');
  }
}

// Конкретный класс врага - Робот
class RobotEnemy extends Enemy {
  spawn(): void {
    console.log('Робот появился');
  }

  move(): void {
    console.log('Робот движется по заданному пути');
  }

  attack(): void {
    console.log('Робот атакует базу');
  }
}

const zombieEnemy = new ZombieEnemy();
zombieEnemy.playGame(); // Зомби появился
                        // Зомби движется по направлению к базе
                        // Зомби атакует базу

const robotEnemy = new RobotEnemy();
robotEnemy.playGame();// Робот появился
                      // Робот движется по заданному пути
                      // Робот атакует базу
