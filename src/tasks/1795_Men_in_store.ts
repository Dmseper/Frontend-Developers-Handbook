interface IOrder {
  numberOfProducts: number
  product: string
}

class Store {
  products: Map<string, number> = new Map<string, number>()

  requiredProductsForBuyers: Array<string> = []
  time: number = 0

  constructor(products: Array<string>, requiredProductsForBuyers: Array<string>,) {
    this.requiredProductsForBuyers = requiredProductsForBuyers
    products.forEach(value => {
        let [numberOfProducts, of, product] = value.split(' ');
        this.products.set(product, parseInt(numberOfProducts))
      }
    )

  }

  updateTime() {
    this.time++
  }

  purchase(buyer: string) {
    let [numberOfProducts, of, product] = buyer.split(' ')
    this.updateTime()

    if (!this.products.has(product)) {
      //если товара вообще нет => к следующему покупателю
      this.requiredProductsForBuyers.splice(0, 1)
      return
    }

    if (this.products.get(product)! <= parseInt(numberOfProducts)) {
      //есть ли нужное количество товара
      this.products.set(product, this.products.get(product)! - parseInt(numberOfProducts))
      this.requiredProductsForBuyers.splice(0, 1)
      return;
    }

    //нет нужного количество товара
    this.requiredProductsForBuyers[0] = this.requiredProductsForBuyers[1]
    this.requiredProductsForBuyers[1] = `${this.products.get(product)} of ${product}`
    this.updateTime()


  }

  getTime() {
    this.startBuy()
    console.log("asdasd", this.time)
  }

  startBuy() {

    while (0 !== this.requiredProductsForBuyers.length) {
      this.purchase(this.requiredProductsForBuyers[0])
    }
  }
}


const newBuyers = new Store(['2 of sweets', '4 of milk', '1 of sausage'],
  ['2 of milk', '3 of sweets', '3 of milk', '1 of cheese,'])

newBuyers.getTime()