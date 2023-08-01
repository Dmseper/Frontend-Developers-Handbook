abstract class Tank {
  protected weapon: Weapon;

  constructor(weapon: Weapon) {
    this.weapon = weapon;
  }

  abstract move(): void;

  abstract fire(): void;
}

abstract class Weapon {
  abstract fire(): void;
}

class LightTank extends Tank {
  move(): void {
    console.log("Light tank is moving quickly.");
  }

  fire(): void {
    this.weapon.fire();
  }
}

class HeavyTank extends Tank {
  move(): void {
    console.log("Heavy tank is moving slowly.");
  }

  fire(): void {
    this.weapon.fire();
  }
}

class MachineGun extends Weapon {
  fire(): void {
    console.log("Machine gun fires rapidly.");
  }
}

class Cannon extends Weapon {
  fire(): void {
    console.log("Cannon fires with a powerful blast.");
  }
}


const lightTank = new LightTank(new MachineGun());
const heavyTank = new HeavyTank(new Cannon());

lightTank.move(); // Light tank is moving quickly.
lightTank.fire(); // Machine gun fires rapidly.

heavyTank.move(); // Heavy tank is moving slowly.
heavyTank.fire(); // Cannon fires with a powerful blast.



