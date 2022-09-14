const Employee = require('./Employee')

class Enginner extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id)
        this.github = github;
        this.getRole = () => {
            console.log("teste enge"+name,email,id,github)
            var auxArray = [];
            auxArray[0] = name;
            auxArray[1] = email;
            auxArray[2] = id;
            auxArray[3] = github;
            auxArray[4] = "Enginner";
            return auxArray
        };
    }
}
module.exports = Enginner;