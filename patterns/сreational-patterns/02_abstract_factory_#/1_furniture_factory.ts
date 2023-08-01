//Позволяет создавать семейства связных объектов,
//не привязываясь к конкретным классам создаваемых объектов


interface IFactoryFurniture {
  createChair: () => IFurniture
  createSofa: () => IFurniture
  createTable: () => IFurniture
}

interface IFurniture {
  getHeight: () => number
  getWidth: () => number
  getMaterial: () => string
}


class VictorianFurniture implements IFactoryFurniture {
  createChair(): ModernChair {
    return new ModernChair();
  }

  createSofa(): ModernSofa {
    return new ModernSofa();
  }

  createTable(): ModernTable {
    return new ModernTable();
  }
}

class ModernFurniture implements IFactoryFurniture {
  createChair(): VictorianChair {
    return new VictorianChair();
  }

  createSofa(): VictorianSofa {
    return new VictorianSofa();
  }

  createTable(): VictorianTable {
    return new VictorianTable();
  }
}

class ModernChair implements IFurniture {
  getHeight(): number {
    return 50;
  }

  getMaterial(): string {
    return "wood";
  }

  getWidth(): number {
    return 70;
  }

}

class ModernTable implements IFurniture {
  getHeight(): number {
    return 100;
  }

  getMaterial(): string {
    return "glass";
  }

  getWidth(): number {
    return 120;
  }

}

class ModernSofa implements IFurniture {
  getHeight(): number {
    return 100;
  }

  getMaterial(): string {
    return "wood";
  }

  getWidth(): number {
    return 120;
  }

}

class VictorianSofa implements IFurniture {
  getHeight(): number {
    return 120;
  }

  getMaterial(): string {
    return "cloth, wood";
  }

  getWidth(): number {
    return 140;
  }

}

class VictorianTable implements IFurniture {
  getHeight(): number {
    return 120;
  }

  getMaterial(): string {
    return "cloth, wood";
  }

  getWidth(): number {
    return 140;
  }

}

class VictorianChair implements IFurniture {
  getHeight(): number {
    return 120;
  }

  getMaterial(): string {
    return "cloth, wood";
  }

  getWidth(): number {
    return 140;
  }

}


const victorianFactory = new VictorianFurniture();
const modernFactory = new ModernFurniture();

const victorianChair = victorianFactory.createChair();
console.log(victorianChair)

const modernTable = modernFactory.createTable()
console.log(modernTable)

