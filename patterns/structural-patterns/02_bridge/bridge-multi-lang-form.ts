// Абстракция: Форма ввода
abstract class InputForm {
  protected localization: Localization;

  constructor(localization: Localization) {
    this.localization = localization;
  }

  abstract render(): void;
}

// Интерфейс локализации
interface Localization {
  getPlaceholder(): string;
  getSubmitText(): string;
}

// Реализация локализации для русского языка
class RussianLocalization implements Localization {
  getPlaceholder(): string {
    return "Введите текст";
  }

  getSubmitText(): string {
    return "Отправить";
  }
}

// Реализация локализации для английского языка
class EnglishLocalization implements Localization {
  getPlaceholder(): string {
    return "Enter text";
  }

  getSubmitText(): string {
    return "Submit";
  }
}

// Конкретная форма
class UserForm extends InputForm {
  render(): void {
    console.log(`Placeholder: ${this.localization.getPlaceholder()}`);
    console.log(`Button: ${this.localization.getSubmitText()}`);
  }
}

// Использование
const russianForm = new UserForm(new RussianLocalization());
russianForm.render();
// Выведет:
// Placeholder: Введите текст
// Button: Отправить

const englishForm = new UserForm(new EnglishLocalization());
englishForm.render();
// Выведет:
// Placeholder: Enter text
// Button: Submit
