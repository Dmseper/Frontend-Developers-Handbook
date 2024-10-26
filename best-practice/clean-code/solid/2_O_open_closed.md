Принцип открытости/закрытости (Open/Closed Principle, OCP) - это один из пяти принципов SOLID. Он гласит, что
программные сущности, такие как классы, модули, функции и т. д., должны быть открыты для расширения, но закрыты для
изменения. Это означает, что мы должны стремиться изменять поведение программы, добавляя новый код, а не изменяя
существующий.

Пример на TypeScript, в котором нарушается принцип открытости/закрытости:

```typescript
// Нарушение принципа открытости/закрытости
class Weapon {
  damage: number; // 0 - 100;
  range: number; // 0 - 100;
  type: string;
  constructor( type:string, damage: number, range: number) {
    this.type = type
    this.damage = damage;
    this.range = range;
  }

  attack() {
    //Постянно необходимо будет изменять существующий код при добавлении нового типа оружия, что не соответствует принципу OCP
    if (this.type === 'sword') {
      console.log(`Удар мечом ${this.damage}`)
    }
   if (this.type === 'crossbow') {
     console.log(`Выстрел арбалета ${this.damage}`)

   }
  }
}

class Character {
  name: string;
  weapon: Weapon;

  constructor(name: string, weapon: Weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  changeWeapon(newWeapon: Weapon) {
    this.weapon = newWeapon;
  }

  attack() {
    this.weapon.attack();
  }
}

const sword = new Weapon('sword', 15, 2);
const character = new Character('Warrior', sword);
character.attack() //Удар мечом с уроном 40

const crossbow = new Weapon('crossbow', 40, 100);
character.changeWeapon(crossbow);
character.attack() // Удар мечом с уроном 40
```
```typescript
// Соблюдение принципа открытости/закрытости
interface Attacker {
  attack: () => void;
}
class Weapon implements Attacker {
  damage: number; // 0 - 100;
  range: number; // 0 - 100;

  constructor( damage: number, range: number) {
    this.damage = damage;
    this.range = range;
  }

  attack() {}
}

class Sword extends Weapon {
  attack() {
    console.log('Удар мечом с уроном ' + this.damage)
  }
}

class Crossbow extends Weapon {
  attack() {
    console.log('Выстрел из арбалета с уроном ' + this.damage)
  }
}

class Knife extends Weapon {
  attack() {
    console.log('Удар ножом с уроном ' + this.damage)
  }
}

class Character {
  name: string;
  weapon: Weapon;

  constructor(name: string, weapon: Weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  changeWeapon(newWeapon: Weapon) {
    this.weapon = newWeapon;
  }

  attack() {
    this.weapon.attack();
  }
}

const sword = new Sword(15, 2);
const character = new Character('Warrior', sword);
character.attack()

const crossbow = new Crossbow(40, 100);
character.changeWeapon(crossbow);
character.attack()
```
