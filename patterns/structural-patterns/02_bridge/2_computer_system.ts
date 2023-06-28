//Задача: Разработка системы управления компьютерными устройствами с различными типами интерфейсов, с помощью паттерна мост

abstract class Device {
  protected deviceInterfaces: Interface;

  constructor(deviceInterfaces: Interface) {
    this.deviceInterfaces = deviceInterfaces;
  }

  abstract connect(): void;

  abstract disconnect(): void;
}

abstract class Interface {
  abstract connectDevice(): void;

  abstract disconnectDevice(): void;
}

class Monitor extends Device {
  connect(): void {
    this.deviceInterfaces.connectDevice();
  }

  disconnect(): void {
    this.deviceInterfaces.disconnectDevice();
  }
}

class Keyboard extends Device {
  connect(): void {
    this.deviceInterfaces.connectDevice();
  }

  disconnect(): void {
    this.deviceInterfaces.disconnectDevice();
  }
}

class HDMIInterface extends Interface {
  connectDevice(): void {}

  disconnectDevice(): void {}
}

class USBInterface extends Interface {
  connectDevice(): void {}

  disconnectDevice(): void {}
}

const hdmiInterface = new HDMIInterface();
const usbInterface = new USBInterface();

const monitor = new Monitor(hdmiInterface);
const keyboard = new Keyboard(usbInterface);

monitor.connect(); // Подключить монитор через HDMI
keyboard.connect(); // Подключить клавиатуру через USB

monitor.disconnect(); // Отключить монитор через HDMI
keyboard.disconnect(); // Отключить клавиатуру через USB
