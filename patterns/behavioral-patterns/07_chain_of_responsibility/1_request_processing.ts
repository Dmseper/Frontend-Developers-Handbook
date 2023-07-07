// Базовый класс обработчика заявки
abstract class RequestHandler {
  protected nextHandler: RequestHandler | null = null;

  setNextHandler(handler: RequestHandler) {
    this.nextHandler = handler;
  }

  handleRequest(request: AppRequest) {
    if (this.canHandle(request)) {
      this.processRequest(request);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log("Не удалось обработать заявку");
    }
  }

  abstract canHandle(request: AppRequest): boolean;
  abstract processRequest(request: AppRequest): void;
}

// Класс заявки
class AppRequest {
  private readonly type: string;
  private readonly data: any;

  constructor(type: string, data: any) {
    this.type = type;
    this.data = data;
  }

  getType(): string {
    return this.type;
  }

  getData(): any {
    return this.data;
  }
}

// Конкретные классы обработчиков заявки
class TechnicalSupportHandler extends RequestHandler {
  canHandle(request: AppRequest): boolean {
    return request.getType() === "TechnicalSupport";
  }

  processRequest(request: AppRequest) {
    const data = request.getData();
    console.log(`Обработка заявки на техническую поддержку с данными: ${data}`);
  }
}

class SalesHandler extends RequestHandler {
  canHandle(request: AppRequest): boolean {
    return request.getType() === "Sales";
  }

  processRequest(request: AppRequest) {
    const data = request.getData();
    console.log(`Обработка заявки на продажу с данными: ${data}`);
  }
}

class GeneralInquiryHandler extends RequestHandler {
  canHandle(request: AppRequest): boolean {
    return request.getType() === "GeneralInquiry";
  }

  processRequest(request: AppRequest) {
    const data = request.getData();
    console.log(`Обработка общего запроса с данными: ${data}`);
  }
}

// Использование паттерна
const technicalSupportHandler = new TechnicalSupportHandler();
const salesHandler = new SalesHandler();
const generalInquiryHandler = new GeneralInquiryHandler();

technicalSupportHandler.setNextHandler(salesHandler);
salesHandler.setNextHandler(generalInquiryHandler);

// Создание заявок
const request1 = new AppRequest("TechnicalSupport", "Проблема с интернет-соединением");
const request2 = new AppRequest("Sales", "Запрос на покупку продукта");
const request3 = new AppRequest("GeneralInquiry", "Общий вопрос");

// Обработка заявок
technicalSupportHandler.handleRequest(request1);
technicalSupportHandler.handleRequest(request2);
technicalSupportHandler.handleRequest(request3);
