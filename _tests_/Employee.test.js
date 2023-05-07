const Employee = require("../lib/Employee");

// test("description", () => {
//     // test value initialization
//     // process to be tested
//     // conclusion after the process
// })

test("test for the name property", () => {
    // test value initialization
    const testValue = "John";
    // process to be tested
    const newEmployee = new Employee(testValue, "", "");
    // conclusion after the process
    expect(newEmployee.name).toBe(testValue)
})

test("id property", () => {
     // test value initialization
     const testValue = "1";
     // process to be tested
     const newEmployee = new Employee ("", testValue, "");
     // conclusion after the process
     expect(newEmployee.id).toBe(testValue)
})

test("email property", () => {
 // test value initialization
 const testValue = "John@email.com";
 // process to be tested
 const newEmployee = new Employee("", "", testValue);
 // conclusion after the process
 expect(newEmployee.email).toBe(testValue)
})

test("test for getName method", () => {
    // test value initialization
    const testValue = "John";
    // process to be tested
    const newEmployee = new Employee(testValue, "", "");
    // conclusion after the process
    expect(newEmployee.getName()).toBe(testValue)
})

test("test for getID method", () => {
     // test value initialization
     const testValue = "1";
     // process to be tested
     const newEmployee = new Employee ("", testValue, "");
     // conclusion after the process
     expect(newEmployee.getId()).toBe(testValue)
})

test("test for getEmail method", () => {
    // test value initialization
 const testValue = "John@email.com";
 // process to be tested
 const newEmployee = new Employee("", "", testValue);
 // conclusion after the process
 expect(newEmployee.getEmail()).toBe(testValue)
})

test("test for getRole method", () => {
    // process to be tested
    const newEmployee = new Employee ("")
    // conclusion after the process
    expect(newEmployee.getRole()).toBe("Employee")
})

