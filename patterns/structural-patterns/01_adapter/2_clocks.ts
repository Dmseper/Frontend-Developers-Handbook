// Интерфейс цифровых часов
interface DigitalClock {
  displayTime(): void;
}

// Цифровые часы
class DigitalClockImpl implements DigitalClock {
  displayTime(): void {
    const now = new Date();
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()
    const seconds = now.getSeconds().toString()
    console.log(`Digital Clock: ${hours}:${minutes}:${seconds}`);
  }
}

// Интерфейс часов со стрелками
interface AnalogClock {
  setHandsRotation(hours: number, minutes: number, seconds: number): void;
  displayTime(): void;
}

// Часы со стрелками
class AnalogClockImpl implements AnalogClock {
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
class AnalogClockAdapter implements DigitalClock {
  private analogClock: AnalogClock;

  constructor(analogClock: AnalogClock) {
    this.analogClock = analogClock;
  }

  displayTime(): void {
    this.analogClock.displayTime();
  }
}

// Клиентский код
const digitalClock: DigitalClock = new DigitalClockImpl();
digitalClock.displayTime();
// Output:
// Digital Clock: 12:34:56

const analogClock: AnalogClock = new AnalogClockImpl();
analogClock.setHandsRotation(10, 45, 30);
analogClock.displayTime();
// Output:
// Analog Clock: 10:45:30

const analogClockAdapter: DigitalClock = new AnalogClockAdapter(analogClock);
analogClockAdapter.displayTime();
// Output:
// Analog Clock: 10:45:30
