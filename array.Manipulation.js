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
  