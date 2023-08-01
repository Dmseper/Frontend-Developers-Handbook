Результат (или ошибку) Promise можно прочитать только один раз. Когда Promise завершается (положительно - успешно или отрицательно - с ошибкой), его результат становится доступным для обработки через методы `.then()` и `.catch()`. После того как Promise разрешен (resolved) или отклонен (rejected), его состояние становится неизменным, и попытка повторного чтения результата не приведет к выполнению обработчиков `.then()` или `.catch()`.

Пример:

```javascript
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success');
      // или reject(new Error('Something went wrong'));
    }, 1000);
  });
}

const promise = asyncFunction();

promise
  .then(result => {
    console.log('Результат:', result);
  })
  .catch(error => {
    console.error('Ошибка:', error.message);
  });

// Второй вызов обработчиков не выполнится
promise
  .then(result => {
    console.log('Этот обработчик не выполнится:', result);
  })
  .catch(error => {
    console.error('Этот обработчик не выполнится:', error.message);
  });
```

В данном примере, Promise будет разрешен через 1 секунду и выполнится первый обработчик `.then()`. Как только Promise разрешен, второй обработчик не будет выполнен, и результат Promise нельзя будет прочитать повторно.

Чтобы обработать результат Promise несколько раз или выполнить последовательные действия, можно использовать цепочку методов `.then()`:

```javascript
asyncFunction()
  .then(result => {
    console.log('Первый обработчик:', result);
    return result + ' и что-то еще';
  })
  .then(newResult => {
    console.log('Второй обработчик:', newResult);
  })
  .catch(error => {
    console.error('Ошибка:', error.message);
  });
```

Таким образом, метод `.then()` может возвращать новое значение или новый Promise, и это значение можно использовать в следующем обработчике в цепочке.