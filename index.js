// Write your solution in this file!
const employee = { name: 'Billy', streetAddress: '1101 Milford Dr' };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    /*const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;*/
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}