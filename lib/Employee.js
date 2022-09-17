const inquirer = require('inquirer')
const Questions = require('./Questions.js')
var promptSync = require('prompt-sync');
const prompt = promptSync(); 
class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getName() {
        this.name = this.name
        if(!this.name){
            this.name = prompt('It is not possible for the Name to be empty. Please insert Name here!: ');
            this.getName()
        }else{
          this.name = this.name
          return this.name;
        }
    };
    getId() {
        this.id = this.id
        if(!this.id){
            this.id = prompt('It is not possible for the Id to be empty. Please insert Id here!:');
            this.getId()
        }else{
           this.id = this.id
           return this.id;
        }
    };
    getEmail() {
        this.email = this.email
        if(!this.email){
            this.email = prompt('It is not possible for the Email to be empty. Please insert Email here!: ');
            this.getEmail()
        }else{
           this.email = this.email
           return this.email;
        }
    };
    getRoleEmploye() {
        this.getName();
        this.getId();
        this.getEmail();
        if(this.name && this.email && this.id){
            return "Employee"
        }
      
    };
}
module.exports = Employee;