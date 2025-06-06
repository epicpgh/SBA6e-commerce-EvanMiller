import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import  {handleError} from "./utils/errorHandler";
import { calculateTax } from "./utils/taxCalculator";
async function run() {
    try {
      const products = await fetchProducts();
  
      products.forEach((product) => {
        const discount = calculateDiscount(product.price, product.discountPercentage);
        const tax = calculateTax(product.price, product.category);

        product.displayDetails();
        console.log(`Discount Amount: $${discount.toFixed(2)}`);
        console.log(`Tax Amount: $${tax.toFixed(2)}\n`);
      });
    } catch (error) {
      handleError(error);
    }
  }
  
  run();