/**
 * Calculates the final price after applying a discount.
 * @param {number} originalPrice 
 * @param {number} discountPercentage 
 * @returns {number} Final price
 */
function applyDiscount(originalPrice, discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) {
        throw new Error("Discount percentage must be between 0 and 100");
    }
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}

// Example usage
const price = 150000;
const discount = 15; // 15% discount
console.log(`Original Price: ${price}`);
console.log(`Final Price after ${discount}% discount: ${applyDiscount(price, discount)}`);
