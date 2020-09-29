// TODO: Write code to define and export the Employee class

//Make class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName(name) {
        if (this.name) {
            return this.name;
        }
    };

    getId(testValue) {
        return testValue === this.id
    };
    getEmail() {

    };
    getRole() {

    };
}

module.exports = Employee;
