export class Product {

   constructor(

    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public discountPercentage: number,
    public category: string,

   )
{} 

getPriceWithDiscount(): number{
    return this.price - (this.discountPercentage / 100) * this.price;
}

displayDetails(): void {
console.log(`Product: ${this.title}`);
console.log(`Product: ${this.price.toFixed(2)}`);
console.log(`Product: ${this.discountPercentage}`);
console.log(`Product: ${this.getPriceWithDiscount().toFixed?(2)}`);
}


}