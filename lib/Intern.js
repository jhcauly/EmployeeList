const Employee = require('./Employee')
var promptSync = require('prompt-sync');
const prompt = promptSync(); 

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.school = school;
            }
            getSchool(){
                this.school = this.school
                if(!this.school){
                    this.school = prompt('It is not possible for the School name to be empty. Please insert School name here!: ');
                    this.getSchool()
                }else{
                   this.school = this.school
                   return this.school;
                }
              }
               getRole(){
                var auxReturn = this.getRoleEmploye();
                this.getSchool();
                if(auxReturn ==="Employee"){
                var auxArray = [];
                auxArray[0] = this.name;
                auxArray[1] = this.email;
                auxArray[2] = this.id;
                auxArray[3] = this.school;
                auxArray[4] = "Intern";
                return auxArray;
                }
                };
}
module.exports = Intern;