function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        // Square the even number
        return num * num;
      } else {
        // Triple the odd number
        return num * 3;
      }
    });
  }
  
  
  // Task 2: formatArrayStrings function
function formatArrayStrings(strings, numbers) {
  if (strings.length !== numbers.length) {
    throw new Error("Both arrays must have the same length");
  }

  return strings.map((str, index) => {
    const num = numbers[index];
    if (num % 2 === 0) {
      // Capitalize the entire string if the number is even
      return str.toUpperCase();
    } else {
      // Convert the string to lowercase if the number is odd
      return str.toLowerCase();
    }
  });
}

// Export functions to be used in other files
module.exports = {
  processArray,
  formatArrayStrings
}; 