const Employee = require('./Employee')
let Employerss = require('../index');

class Manager extends Employee {
 constructor(name, email, id, officeNumber) {
        super(name, email, id)
        this.officeNumber = officeNumber;
        this.getRole = () => {
           var auxArray = [];
            auxArray[0] = name;
            auxArray[1] = email;
            auxArray[2] = id;
            auxArray[3] = officeNumber;
            auxArray[4] = "Manager";
            return auxArray
        };
    }
}
module.exports = Manager;