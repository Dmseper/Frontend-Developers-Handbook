
abstract class Smartphone {
  abstract getModel(): string;
  abstract getOS(): string;
  abstract getPrice(): number;
}
class IPhone extends Smartphone {
  getModel(): string {
    return "iPhone";
  }

  getOS(): string {
    return "iOS";
  }

  getPrice(): number {
    return 1000;
  }
}

class Samsung extends Smartphone {
  getModel(): string {
    return "Samsung";
  }

  getOS(): string {
    return "Android";
  }

  getPrice(): number {
    return 800;
  }
}

// Фабрики
abstract class SmartphoneFactory {
  abstract createSmartphone(): Smartphone;
}

class IPhoneFactory extends SmartphoneFactory {
  createSmartphone(): Smartphone {
    return new IPhone();
  }
}

class SamsungFactory extends SmartphoneFactory {
  createSmartphone(): Smartphone {
    return new Samsung();
  }
}



const iphoneFactory = new IPhoneFactory();
const samsungFactory = new SamsungFactory();

const iphone = iphoneFactory.createSmartphone();
console.log(iphone.getModel());   // Output: iPhone
console.log(iphone.getOS());     // Output: iOS
console.log(iphone.getPrice()); // Output: 1000

const samsung = samsungFactory.createSmartphone();
console.log(samsung.getModel());   // Output: Samsung
console.log(samsung.getOS());     // Output: Android
console.log(samsung.getPrice()); // Output: 800
