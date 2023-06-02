// Для каждого класса должно быть определено единственное назначение.
// Все ресурсы, необходимые для его осуществления, должны быть инкапсулированы в этот класс и подчинены только этой задаче.

class News {

  modified: boolean = false

  constructor(public title: string, public text: string) {
    this.title = title
    this.text = text
  }

  update(text: string) {
    this.text = text
    this.modified = true
  }


}

class NewPrinter {
  constructor(public news: News) {
    this.news = news
  }
  toHTML() {
    return `<div class="news"> 
                <h1>${this.news.title}</h1>
                <p><${this.news.text}</p>
            </div> `
  }
  toJSON() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified
    }, null , 2)
  }
}


const news1 = new News("News 1", "lorem")
const printer = new NewPrinter(news1)
console.log(printer.toHTML())

