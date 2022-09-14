const inquirer = require('inquirer')
const Questions = require('./Questions.js')
const Manager = require('./Manager.js')
/* const Engineer = require('./lib/Enginner.js')
const Intern = require('./lib/Intern.js') */
function valideAnswer(name,email,id,Office,Github,School,Answer) {
    var auxName = name;
    var auxEmail = email;
    var auxId = id;
    var auxOffice = Office;
    var auxGitHub = Github;
    var auxSchool = School;
    var auxAnswer = Answer;
    const aux = valideName(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
   console.log(aux)
}
function valideName(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer) {
   if (auxName === "") {
        inquirer
            .prompt(Questions.questionsManager[0])
            .then((name) => {
                valideName(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
            })
    } else {
        valideEmail(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
    }
}
function valideEmail(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer) {
    if (auxEmail === undefined || auxEmail === "") {
        inquirer
            .prompt(Questions.questionsManager[1])
            .then((email) => {
                valideEmail(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
            })
    } else {
        valideId(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
    }
}
function valideId(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer) {
    if (auxId === undefined || auxId === "") {
        inquirer
            .prompt(Questions.questionsManager[2])
            .then((id) => {
                valideId(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
            })
    } else {
    if(auxAnswer === '0'){
        valideOffice(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
    }else if(auxAnswer === '1'){
             valideGitHub(auxName,auxEmail,auxId,auxGitHub)
        }else if(auxAnswer === '2'){
                  valideSchool(auxName,auxEmail,auxId,auxSchool)
    }
}
function valideOffice(auxName,auxEmail,auxId,auxOffice) {
    console.log("office")
   /*  if (auxOffice === undefined || auxOffice === "") {
        inquirer
            .prompt(Questions.questionsManager[3])
            .then((office) => {
                valideOffice(auxName,auxEmail,auxId,office.office)
            })
    } else {
        const Manager_ = new Engineer(engineer.name, engineer.email,
            engineer.id, engineer.github);
            Manager_.getRole(engineer.name);
    } */
}
function valideGitHub(auxName,auxEmail,auxId,auxGitHub) {
    console.log("Git")
   /*  if (auxOffice === undefined || auxOffice === "") {
        inquirer
            .prompt(Questions.questionsManager[3])
            .then((office) => {
                valideOffice(auxName,auxEmail,auxId,office.office)
            })
    } else {
        const Manager_ = new Engineer(engineer.name, engineer.email,
            engineer.id, engineer.github);
            Manager_.getRole(engineer.name);
    } */
}
function valideSchool(auxName,auxEmail,auxId,auxSchool) {
    console.log("Schol")
   /*  if (auxOffice === undefined || auxOffice === "") {
        inquirer
            .prompt(Questions.questionsManager[3])
            .then((office) => {
                valideOffice(auxName,auxEmail,auxId,office.office)
            })
    } else {
        const Manager_ = new Engineer(engineer.name, engineer.email,
            engineer.id, engineer.github);
            Manager_.getRole(engineer.name);
    } */
}


/* 
function valideEmail() {
let Email = prompt("Email");
    if(Email === ""){
        valideEmail()
    }else{
        return Email;
    }
}
function valideEmail() {
let Email = prompt("Email");
    if(Email === ""){
        valideEmail()
    }else{
        return Email;
    }
}
function valideId() {
let Id = prompt("Id");
    if(Id === ""){
        valideId()
    }else{
        return Id;
    }
}
function valideOffice() {
let Office = prompt("Id");
    if(Office === ""){
        valideOffice()
    }else{
        return Office;
    }
}
 */
module.exports = {valideName1/* ,valideEmail,valideId,valideOffice */};
/* module.exports = teste; */