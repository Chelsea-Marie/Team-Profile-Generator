const Manager = require("../lib/Manager")

test("test for officeNumber property", () => {
    // test value initialization
    const testValue = "12345"
    // process to be tested
    const newManager = new Manager("", "", "", testValue)
    // conclusion after the process
    expect(newManager.officeNumber).toBe(testValue)
})

test("test for get officeNumber method", () => {
    // test value initialization
    const testValue = "12345"
    // process to be tested
    const newManager = new Manager("", "", "", testValue)
    // conclusion after the process
    expect(newManager.getOfficeNumber()).toBe(testValue)
})

test("test for getRole method", () => {
    // process to be tested
    const newManager = new Manager("", "", "", "")
    // conclusion after the process
    expect(newManager.getRole()).toBe("Manager")
})