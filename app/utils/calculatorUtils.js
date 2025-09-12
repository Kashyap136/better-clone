// Function to calculate monthly mortgage payment
export function calculateMortgage(principal, annualRate, years, propertyTax, insurance) {
  // Convert annual rate to monthly rate
  const monthlyRate = (annualRate / 100) / 12;
  // Convert years to months
  const numberOfPayments = years * 12;

  // Calculate base monthly payment using mortgage formula
  const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  // Add monthly property tax and insurance
  const monthlyTax = propertyTax / 12;
  const monthlyInsurance = insurance / 12;

  return {
    principal: monthlyPayment,
    tax: monthlyTax,
    insurance: monthlyInsurance,
    total: monthlyPayment + monthlyTax + monthlyInsurance
  };
}

// Function to format currency
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Function to format percentage
export function formatPercentage(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100);
}

// Function to parse currency input
export function parseCurrencyInput(value) {
  return parseFloat(value.replace(/[$,]/g, '')) || 0;
}