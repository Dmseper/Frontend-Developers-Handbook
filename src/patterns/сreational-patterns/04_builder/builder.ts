// Gозволяет пошагово создавать сложные объекты.

// Строитель даёт возможность использовать иодин и тот же код строительства для получения разных представлений объектов

// Задача: Создание игрового персонажа в компьютерной игре.

// Описание: В компьютерной игре необходимо создать игрового персонажа с различными характеристиками,
// такими как имя, класс (воин, маг, лучник), уровень, здоровье, сила атаки и т. д.
// Каждый персонаж может иметь разные наборы характеристик в зависимости от выбранного класса.
// Используя паттерн "Строитель" (Builder), необходимо реализовать создание игрового персонажа
// с гибким подходом к конструированию и настройке его характеристик.


// Класс персонажа
class Character {
  private name: string;
  private characterClass: string;
  private level: number;
  private health: number;
  private attack: number;

  constructor(builder: CharacterBuilder) {
    this.name = builder.name;
    this.characterClass = builder.characterClass;
    this.level = builder.level;
    this.health = builder.health;
    this.attack = builder.attack;
  }

  // Методы получения характеристик персонажа
  getName(): string {
    return this.name;
  }

  getCharacterClass(): string {
    return this.characterClass;
  }

  getLevel(): number {
    return this.level;
  }

  getHealth(): number {
    return this.health;
  }

  getAttack(): number {
    return this.attack;
  }
}

// Класс Строителя персонажа
class CharacterBuilder {
  name: string;
  characterClass: string;
  level: number;
  health: number;
  attack: number;

  constructor(name: string, characterClass: string) {
    this.name = name;
    this.characterClass = characterClass;
  }

  setLevel(level: number): CharacterBuilder {
    this.level = level;
    return this;
  }

  setHealth(health: number): CharacterBuilder {
    this.health = health;
    return this;
  }

  setAttack(attack: number): CharacterBuilder {
    this.attack = attack;
    return this;
  }

  build(): Character {
    return new Character(this);
  }
}

// Использование
const warrior = new CharacterBuilder("Adam", "Warrior")
  .setLevel(10)
  .setHealth(100)
  .setAttack(20)
  .build();

console.log(warrior.getName()); // Output: Warrior
console.log(warrior.getCharacterClass()); // Output: Warrior
console.log(warrior.getLevel()); // Output: 10
console.log(warrior.getHealth()); // Output: 100
console.log(warrior.getAttack()); // Output: 20
