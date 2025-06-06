export function calculateDiscount(
        price: number, discountPercentage: number
): number{
    return(discountPercentage/100)*price;
}