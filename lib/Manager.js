const Employee = require('./Employee')
var promptSync = require('prompt-sync');
const prompt = promptSync(); 

var Employerss = [];
class Manager extends Employee {
      constructor(name, email, id, officeNumber) {
        super(name, email, id)
        this.officeNumber = officeNumber;
      }
        getOffice(){
          this.officeNumber = this.officeNumber
          if(!this.officeNumber){
              this.officeNumber = prompt('It is not possible for the Officer number to be empty. Please insert Officer number here!: ');
              this.getOffice()
          }else{
           this.officeNumber = this.officeNumber
           return this.officeNumber;
          }
        }
        getRole(){
            var auxReturn = this.getRoleEmploye();
            this.getOffice();
            if(auxReturn ==="Employee"){
            var auxArray = [];
            auxArray[0] = this.name;
            auxArray[1] = this.email;
            auxArray[2] = this.id;
            auxArray[3] = this.officeNumber;
            auxArray[4] = "Manager";
            return auxArray;
            }
        };
    }
module.exports = Manager;