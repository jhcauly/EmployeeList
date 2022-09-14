const inquirer = require('inquirer')
const Questions = require('./Questions.js')
const Manager = require('./Manager.js')
const Engineer = require('./Enginner.js')
const Intern = require('./Intern.js')
function valideAnswer(name,email,id,Office,Github,School,Answer) {
    var auxName = name;
    var auxEmail = email;
    var auxId = id;
    var auxOffice = Office;
    var auxGitHub = Github;
    var auxSchool = School;
    var auxAnswer = Answer;
    console.log(auxAnswer)
   valideName(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
}
function valideName(auxName,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer) {
   if (auxName === "") {
        inquirer
            .prompt(Questions.questionsManager[0])
            .then((name) => {
                valideName(name.name,auxEmail,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
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
                valideEmail(auxName,email.email,auxId,auxOffice,auxGitHub,auxSchool,auxAnswer)
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
                valideId(auxName,auxEmail,id.id,auxOffice,auxGitHub,auxSchool,auxAnswer)
            })
    } else {
        switch(auxAnswer) {
            case "0":
               valideOffice(auxName,auxEmail,auxId,auxOffice) 
               break;
            case "1":
                valideGit(auxName,auxEmail,auxId,auxGitHub) 
                break;
              case "2":
                valideSchool(auxName,auxEmail,auxId,auxSchool) 
                break;
          }
      
        /*  valideOffice(auxName,auxEmail,auxId,auxOffice) */
    }
}
function valideOffice(auxName,auxEmail,auxId,auxOffice) {
    if (auxOffice === undefined || auxOffice === "") {
        inquirer
            .prompt(Questions.questionsManager[3])
            .then((office) => {
                valideOffice(auxName,auxEmail,auxId,office.office)
            })
    } else {
        const Manager_ = new Manager(auxName, auxEmail,
            auxId, auxOffice);
            Manager_.getRole();
    }
}
function valideGit(auxName,auxEmail,auxId,auxGitHub) {
    if (auxGitHub === undefined || auxGitHub === "") {
        inquirer
            .prompt(Questions.questionsEngineer[3])
            .then((github) => {
                valideOffice(auxName,auxEmail,auxId,github.github)
            })
    } else {
        const engineer_ = new Engineer(auxName, auxEmail,
            auxId, auxGitHub);
        engineer_.getRole();
    }
}
function valideSchool(auxName,auxEmail,auxId,auxSchool) {
    if (auxSchool === undefined || auxSchool === "") {
        inquirer
            .prompt(Questions.questionsInterns[3])
            .then((school) => {
                valideOffice(auxName,auxEmail,auxId,school.school)
            })
    } else {
        const interns_ = new Intern(auxName, auxEmail,
            auxId, auxSchool);
            interns_.getRole();
    }
}

module.exports = {valideAnswer/* ,valideEmail,valideId,valideOffice */};
/* module.exports = teste; */