const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return this.officeNumber
    }


    getRole() {
        return "Manager"
    }
}

module.exports = Manager;

// const manager1 = new Manager("Pter", 2, "pter@mail.com", 123456)

// console.log(manager1.getName())
// console.log(manager1.getId())
// console.log(manager1.getEmail())
// console.log(manager1.getOfficeNumber())