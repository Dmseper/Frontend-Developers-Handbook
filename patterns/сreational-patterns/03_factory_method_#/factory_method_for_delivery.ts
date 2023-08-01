// Интерфейс для логистического транспортного средства
interface Transport {
  deliver(): void;
}

// Конкретные классы логистических транспортных средств
class Truck implements Transport {
  public deliver(): void {
    console.log("Наземная доставка");
  }
}

class Ship implements Transport {
  public deliver(): void {
    console.log("Морская доставка");
  }
}

class Airplane implements Transport {
  public deliver(): void {
    console.log("Воздушная доставка");
  }
}

// Фабричный метод
abstract class LogisticsCompany {
  public abstract createTransport(): Transport;

  public deliver(): void {
    const transport = this.createTransport();
    transport.deliver();
  }
}

// Конкретные фабрики для различных типов доставки
class RoadLogistics extends LogisticsCompany {
  public createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends LogisticsCompany {
  public createTransport(): Transport {
    return new Ship();
  }
}

class AirLogistics extends LogisticsCompany {
  public createTransport(): Transport {
    return new Airplane();
  }
}

// Использование
const roadLogistics = new RoadLogistics();
roadLogistics.deliver();
// Output: "Наземная доставка"

const seaLogistics = new SeaLogistics();
seaLogistics.deliver();
// Output: "Морская доставка"

const airLogistics = new AirLogistics();
airLogistics.deliver();
// Output: "Воздушная доставка"
