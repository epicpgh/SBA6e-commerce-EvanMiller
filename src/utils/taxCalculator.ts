export function calculateTax(price: number, category: string):  number{
    const taxRate = category === "groceries" ? 0.03 : 0.07;
    return price * taxRate;
}