const Engineer = require("../lib/Engineer")

test("test for GitHub property", () => {
    // test value initialization
    const testValue = "john123"
    // process to be tested
    const newEngineer = new Engineer("", "", "", testValue)
    // conclusion after the process
    expect(newEngineer.gitHub).toBe(testValue)
})

test("test for get gitHub method", () => {
     // test value initialization
     const testValue = "john123"
     // process to be tested
     const newEngineer = new Engineer("", "", "", testValue)
     // conclusion after the process
     expect(newEngineer.getGitHub()).toBe(testValue)
})

test("test for getRole method", () => {
    // process to be tested
    const newEngineer = new Engineer("", "", "", "")
    // conclusion after the process
    expect(newEngineer.getRole()).toBe("Engineer")
})