// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function call or "running the function"
const myTotal = calculateBill(100, 0.13);

console.log(myTotal);
