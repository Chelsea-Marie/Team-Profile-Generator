const Intern = require("../lib/Intern")

test("test for school property", () => {
    // test value initialization
    const testValue = "school"
    // process to be tested
    const newIntern = new Intern("", "", "", testValue)
    // conclusion after the process
    expect(newIntern.school).toBe(testValue)
})

test("test for get school method", () => {
     // test value initialization
     const testValue = "school"
     // process to be tested
     const newIntern = new Intern("", "", "", testValue)
     // conclusion after the process
     expect(newIntern.getSchool()).toBe(testValue)
})

test("test for getRole method", () => {
    // process to be tested
    const newIntern = new Intern("", "", "", "")
    // conclusion after the process
    expect(newIntern.getRole()).toBe("Intern")
})