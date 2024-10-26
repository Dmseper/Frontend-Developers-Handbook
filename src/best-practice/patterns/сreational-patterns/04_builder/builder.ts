import { PartA, PartB, PartC } from "./parts.js";

interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class ConcreteBuilder1 implements Builder {
    private product: Product1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class ConcreteBuilder2 implements Builder {
    private product: Product2;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product2();
    }

    public producePartA(): void {
        this.product.parts.push(new PartA);
    }

    public producePartB(): void {
        this.product.parts.push(new PartB);
    }

    public producePartC(): void {
        this.product.parts.push(new PartC);
    }

    public getProduct(): Product2 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class Product2 {
    public parts: any[] = [];

    public listParts(): void {
        for (let all of this.parts) {
            all.wall_size();
            console.log(all);
        }
    }
}

class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

function client(director: Director, director_2: Director) {
    const builder = new ConcreteBuilder1();
    const builder_2 = new ConcreteBuilder2();
    director.setBuilder(builder);
    director_2.setBuilder(builder_2);

    /*
    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    */

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();

    director_2.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    const check = builder_2.getProduct();
    check.listParts();

    /*
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
    */
}

const director = new Director();
const director_2 = new Director(); // Можно обойтись одним, но так будет удобнее
client(director, director_2);
