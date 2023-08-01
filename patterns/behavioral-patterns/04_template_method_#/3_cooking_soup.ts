//Продемонтрировать процесс приготовления супов окрошка и куриная лапша на примере паттерна «Шаблонный метод».


abstract class Soup {
  // Шаблонный метод, определяющий порядок приготовления супа
  makeSoup(): void {
    this.boilWater();
    this.prepareIngredients();
    this.cookSoup();
    this.serveSoup();
  }

  boilWater(): void {
    console.log('Кипятим воду');
  }

  abstract prepareIngredients(): void;
  abstract cookSoup(): void;

  serveSoup(): void {
    console.log('Подаем суп');
  }
}

// Конкретный класс для приготовления окрошки
class Okroshka extends Soup {
  prepareIngredients(): void {
    console.log('Подготавливаем овощи и кефир для окрошки');
  }

  cookSoup(): void {
    console.log('Смешиваем овощи с кефиром и охлаждаем');
  }
}

// Конкретный класс для приготовления куриной лапши
class ChickenNoodleSoup extends Soup {
  prepareIngredients(): void {
    console.log('Подготавливаем курицу, овощи и лапшу для куриной лапши');
  }

  cookSoup(): void {
    console.log('Готовим куриный бульон, добавляем овощи и лапшу');
  }
}

// Клиентский код
const okroshkaRecipe = new Okroshka();
okroshkaRecipe.makeSoup();

// Кипятим воду
// Подготавливаем овощи и кефир для окрошки
// Смешиваем овощи с кефиром и охлаждаем
// Подаем суп

const chickenNoodleSoupRecipe = new ChickenNoodleSoup();
chickenNoodleSoupRecipe.makeSoup();
// Кипятим воду
// Подготавливаем курицу, овощи и лапшу для куриной лапши
// Готовим куриный бульон, добавляем овощи и лапшу
// Подаем суп
