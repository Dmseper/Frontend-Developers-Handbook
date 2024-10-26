class PartA {
    wigth: number = 10;
    hight: number = 20;
    type: string = "lux";
    wall_size(): void {
        console.log(`Размер 1 ${this.wigth}, Размер 2 ${this.hight}, Площадь ${this.hight * this.wigth}`);
    }
    wall_S(): number {
        return this.wigth * this.hight;
    }
    V(L: number): number {
        return L * this.hight * this.wigth
    }
}

class PartB {
    wigth: number = 1;
    hight: number = 2;
    type: string = "lux";
    wall_size(): void {
        console.log(`Размер 1 ${this.wigth}, Размер 2 ${this.hight}, Площадь ${this.hight * this.wigth}`);
    }
    wall_S(): number {
        return this.wigth * this.hight;
    }
    V(L: number): number {
        return L * this.hight * this.wigth
    }
}

class PartC {
    wigth: number = 100;
    hight: number = 200;
    type: string = "lux";
    wall_size(): void {
        console.log(`Размер 1 ${this.wigth}, Размер 2 ${this.hight}, Площадь ${this.hight * this.wigth}`);
    }
    wall_S(): number {
        return this.wigth * this.hight;
    }
    V(L: number): number {
        return L * this.hight * this.wigth
    }
}

export {PartA, PartB, PartC}