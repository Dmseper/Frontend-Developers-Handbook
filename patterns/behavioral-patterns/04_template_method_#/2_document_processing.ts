// Необходимо разработать систему, которая обрабатывает различные типы документов,
// такие как текстовые документы, изображения, видео и аудиофайлы. Каждый тип документа требует
// своей специфической обработки, но есть некоторые общие шаги, которые должны выполняться для
// каждого документа, например, загрузка, проверка формата и сохранение.


abstract class DocumentProcessor {

  abstract loadDocument(): void;
  abstract checkFormat(): void;
  abstract processContent(): void;
  abstract saveDocument(): void;

  // Шаблонный метод для обработки документа
  processDocument(): void {
    this.loadDocument();
    this.checkFormat();
    this.processContent();
    this.saveDocument();
  }

}

// Конкретный класс для текстовых документов
class TextDocumentProcessor extends DocumentProcessor {
  loadDocument(): void {
    console.log('Загрузка текстового документа');
  }

  checkFormat(): void {
    console.log('Проверка формата текстового документа');
  }

  processContent(): void {
    console.log('Обработка текстового содержимого');
  }

  saveDocument(): void {
    console.log('Сохранение текстового документа');
  }
}

// Конкретный класс для изображений
class ImageDocumentProcessor extends DocumentProcessor {
  loadDocument(): void {
    console.log('Загрузка изображения');
  }

  checkFormat(): void {
    console.log('Проверка формата изображения');
  }

  processContent(): void {
    console.log('Обработка изображения');
  }

  saveDocument(): void {
    console.log('Сохранение изображения');
  }
}


const textDocumentProcessor = new TextDocumentProcessor();
textDocumentProcessor.processDocument();  // Загрузка текстового документа
                                          // Проверка формата текстового документа
                                          // Обработка текстового содержимого
                                          // Сохранение текстового документа

const imageDocumentProcessor = new ImageDocumentProcessor();
imageDocumentProcessor.processDocument(); // Загрузка изображения
                                          // Проверка формата изображения
                                          // Обработка изображения
                                          // Сохранение изображения
