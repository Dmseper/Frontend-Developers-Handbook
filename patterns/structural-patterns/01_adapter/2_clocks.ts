// Интерфейс цифровых часов
interface IDigitalClock {
  displayTime(): void;
}

// Цифровые часы
class DigitalClockImpl implements IDigitalClock {
  displayTime(): void {
    const now = new Date();
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()
    const seconds = now.getSeconds().toString()
    console.log(`Digital Clock: ${hours}:${minutes}:${seconds}`);
  }
}

// Интерфейс часов со стрелками
interface IAnalogClock {
  setHandsRotation(hours: number, minutes: number, seconds: number): void;
  displayTime(): void;
}

// Часы со стрелками
class AnalogClock implements IAnalogClock {
  private hours: number = 0;
  private minutes: number = 0;
  private seconds: number = 0;

  setHandsRotation(hours: number, minutes: number, seconds: number): void {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  displayTime(): void {
    const hours = this.hours.toString()
    const minutes = this.minutes.toString()
    const seconds = this.seconds.toString()
    console.log(`Analog Clock: ${hours}:${minutes}:${seconds}`);
  }
}

// Адаптер для часов со стрелками
class AnalogClockAdapter implements IDigitalClock {
  private analogClock: IAnalogClock;

  constructor(analogClock: IAnalogClock) {
    this.analogClock = analogClock;
  }

  displayTime(): void {
    this.analogClock.displayTime();
  }
}

const digitalClock: IDigitalClock = new DigitalClockImpl();
digitalClock.displayTime(); // Digital Clock: 12:34:56

const analogClock: IAnalogClock = new AnalogClock();
analogClock.setHandsRotation(10, 45, 30);
analogClock.displayTime(); // Analog Clock: 10:45:30

const analogClockAdapter: IDigitalClock = new AnalogClockAdapter(analogClock);
analogClockAdapter.displayTime(); // Analog Clock: 10:45:30
