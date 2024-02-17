const myPromise = (delay: number) => new Promise((res, rej) => { setTimeout(res, delay) })
setTimeout(() => console.log('in setTimeout1'), 1000);
myPromise(1000).then(res => console.log('in Promise 1'));
setTimeout(() => console.log('in setTimeout2'), 100);
myPromise(2000).then(res => console.log('in Promise 2'));
setTimeout(() => console.log('in setTimeout3'), 2000);
myPromise(1000).then(res => console.log('in Promise 3'));
setTimeout(() => console.log('in setTimeout4'), 1000);
myPromise(5000).then(res => console.log('in Promise 4'));



//Ответ на 50 строке




































//Ответ
//in setTimeout2
//in setTimeout1
//in Promise 1
//in Promise 3
//in setTimeout4
//in Promise 2
//in setTimeout3
//in Promise 4

//Алгритмы выполнения
//переход в макротаску
//time 2 100
//переход в макротаску
//time1 1000
//res1 1000
//res3 1000
//time4 1000
//переход в макротаску
//res2 2000
//переход в макротаску
//res4 5000
