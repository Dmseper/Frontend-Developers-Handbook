//На примере паттерна «Команда» реализовать интерфейс кнопки «умного» пульта, который будет
// включать/выключать в комнате свет/телевизор. Реализовать возможность undo/redo операций.

interface Command {

  redo(): void;

  undo(): void;

}

class LightOn implements Command {
  constructor(private light: Light) {
  }

  redo(): void {
    this.light.turnOn()
  }

  undo(): void {
    this.light.turnOff()
  }
}


class LightOff implements Command {

  constructor(private light: Light) {
  }

  redo(): void {
    this.light.turnOff()
  }

  undo(): void {
    this.light.turnOn()
  }
}

// Класс устройства - освещение
class Light {
  private isOn: boolean = false

  turnOn(): void {
    if (!this.isOn) {
      this.isOn = true;
      console.log('Освещение включено');
    }
  }

  turnOff(): void {
    if (this.isOn) {
      this.isOn = false;
      console.log('Освещение выключено');
    }
  }
}

class RemoteControl {
  private commands: Command[] = [];

  //setCommand для установки команды
  setCommand(command: Command): void {
    this.commands.push(command);
  }

  //executeCommands для выполнения всех установленных команд
  executeCommands(): void {
    this.commands.forEach((command) => {
      command.redo();
    });
  }

  //undoCommands позволяет отменить выполнение всех команд в обратном порядке.
  undoCommands(): void {

    const reversedCommands = this.commands.reverse();
    reversedCommands.forEach((command) => {
      command.undo();
    })
  }
}

// Использование
const remoteControl = new RemoteControl();
const livingRoomLight = new Light();

const lightOn = new LightOn(livingRoomLight);
const lightOff = new LightOff(livingRoomLight);

remoteControl.setCommand(lightOn);
remoteControl.setCommand(lightOff);

remoteControl.executeCommands();
// Освещение включено
// Освещение выключено

remoteControl.undoCommands();

// Освещение включено
// Освещение выключено