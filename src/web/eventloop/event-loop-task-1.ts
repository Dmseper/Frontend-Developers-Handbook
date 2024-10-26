setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);

let p = new Promise<void>((resolve, reject) =>  {
    console.log('Создание промиса');
    resolve();
});

p.then(function(){
    console.log('Обработка промиса');
});

console.log('Конец скрипта');

//Ответ на 50 строке

































//Ответ
//Создание промиса
//Конец скрипта
//Обработка промиса
//Таймаут
