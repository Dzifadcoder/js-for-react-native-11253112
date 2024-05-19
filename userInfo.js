// Import the required functions from arrayManipulation.js
const { formatArrayStrings } = require('./arrayManipulation');

// Task 3: createUserProfiles function
function createUserProfiles(names, modifiedNames) {
  if (names.length !== modifiedNames.length) {
    throw new Error("Both arrays must have the same length");
  }

  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: index + 1
    };
  });
}

// Example usage:
const names = ["Alice", "Bob", "Charlie", "Dana", "Eve"];
const numbers = [1, 2, 3, 4, 5];

// Assuming processArray and formatArrayStrings are correctly defined and used
const processedNumbers = [3, 4, 9, 16, 15]; // Example output from processArray
const modifiedNames = formatArrayStrings(names, processedNumbers);

const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);


// Export the function for use in other files
module.exports = createUserProfiles;