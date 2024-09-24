const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator
    const updatedEmployee = { ...employee };
  
    // Update the value for the given key
    updatedEmployee[key] = value;
  
    // Return the updated object
    return updatedEmployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

function deleteFromEmployeeByKey(employee, key) {
    // Create a new object using the spread operator to copy the original employee object
    const newEmployee = { ...employee };
  
    // Use the delete operator to remove the property with the specified key
    delete newEmployee[key];
  
    // Return the new object without the deleted key-value pair
    return newEmployee;
  }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }