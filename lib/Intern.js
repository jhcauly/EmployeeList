const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.school = school;
        this.getRole = () => {
            console.log("teste intern"+name,email,id,school)
            var auxArray = [];
            auxArray[0] = name;
            auxArray[1] = email;
            auxArray[2] = id;
            auxArray[3] = school;
            auxArray[4] = "Intern";
            return auxArray
        };
    }
}
module.exports = Intern;