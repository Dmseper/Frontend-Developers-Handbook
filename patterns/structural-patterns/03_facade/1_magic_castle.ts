// Задача: Создание игры "Магический замок" с использованием паттерна "Фасад".
//
// Описание: Вам необходимо реализовать систему управления, которая обеспечит простой и удобный интерфейс для игрока,
// скрывая сложность взаимодействия с различными компонентами игры. Для этого использовать паттерн "Фасад".


class GameFacade {
  private player: Player;
  private puzzleManager: PuzzleManager;
  private monsterManager: MonsterManager;

  constructor() {
    this.player = new Player();
    this.puzzleManager = new PuzzleManager();
    this.monsterManager = new MonsterManager();
  }

  public startGame(): void {
    this.player.spawnPlayer();
    this.puzzleManager.spawnPuzzles();
    this.monsterManager.spawnMonsters();
  }

  public solvePuzzle(): void {
    this.puzzleManager.solvePuzzle();
  }

  public fightMonster(): void {
    this.monsterManager.fightMonster();
  }

  public finishGame(): void {
    this.player.destroyPlayer();
    this.puzzleManager.clearPuzzles();
    this.monsterManager.clearMonsters();
  }
}

class Player {
  public spawnPlayer(): void {
    // Реализация кода для создания игрока
  }

  public destroyPlayer(): void {
    // Реализация кода для удаления игрока
  }
}

class PuzzleManager {
  public spawnPuzzles(): void {
    // Реализация кода для создания головоломок
  }

  public solvePuzzle(): void {
    // Реализация кода для решения головоломки
  }

  public clearPuzzles(): void {
    // Реализация кода для удаления головоломок
  }
}

class MonsterManager {
  public spawnMonsters(): void {
    // Реализация кода для создания монстров
  }

  public fightMonster(): void {
    // Реализация кода для сражения с монстром
  }

  public clearMonsters(): void {
    // Реализация кода для удаления монстров
  }
}


const game = new GameFacade();

game.startGame(); // Начать игру, создав игрока, головоломки и монстров

// Игрок решает головоломку
game.solvePuzzle();

// Игрок сражается с монстром
game.fightMonster();

game.finishGame(); // Завершить игру, удалив игрока, головоломки и монстров
