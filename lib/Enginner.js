const Employee = require('./Employee')
var promptSync = require('prompt-sync');
const prompt = promptSync(); 

class Enginner extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id)
        this.github = github;
    }
    getGit(){
        this.github = this.github
        if(!this.github){
            this.github = prompt('It is not possible for the Github to be empty. Please insert Github here!: ');
            this.getGit()
        }else{
           this.github = this.github
           return this.github
        }
      }
       getRole(){
        var auxReturn = this.getRoleEmploye();
        this.getGit();
        if(auxReturn ==="Employee"){
        var auxArray = [];
        auxArray[0] = this.name;
        auxArray[1] = this.email;
        auxArray[2] = this.id;
        auxArray[3] = this.github;
        auxArray[4] = "Enginner";
        return auxArray;
        }
        };
    }
module.exports = Enginner;