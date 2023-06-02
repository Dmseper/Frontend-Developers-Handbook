// Принцип инверсии зависимостей. Модули верхнего уровня не должны зависеть от модулей нижнего уровня.
// И те, и другие должны зависеть от абстракции. Абстракции не должны зависеть от деталей.
// Детали должны зависеть от абстракций.


//                    ПЛОХО так как верхнеуровневый класс зависит от низкоуровнего класса
// class HttpRequestService {}
//
// //Low level
// class HttpService extends HttpRequestService {
//   request(url: string, type: string) {
//
//   }
// }
// //Hight level
// class Http {
//   constructor(private httpService: HttpService) {
//   }
//
//   get(url: string, options: any) {
//     this.httpService.request(url, 'GET')
//   }
//
//   post(url: string, options: any) {
//     this.httpService.request(url, 'POST')
//   }
// }


//                    ХОРОШО

interface Connection {
  request( url: string, options: any): any
}
//Hight level
class Http  {
  constructor(private httpService: Connection) {
  }

  get(url: string, options: any) {
    this.httpService.request(url, 'GET')
  }

  post(url: string, options: any) {
    this.httpService.request(url, 'POST')
  }
}
class HttpService implements Connection{
  request(url: string, type: string) {

  }
}