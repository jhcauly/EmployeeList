/* import {createRequire} from "module";
const require = createRequire(import.meta.url)
import  inquirer  from "inquirer";
import  fs  from "fs";
 */
/* import  inquirer  from "inquirer"; */
const inquirer = require('inquirer')
const fs = require('fs')
const Questions = require('./lib/Questions.js')
const Manager = require('./lib/Manager.js')
const Enginner = require('./lib/Enginner.js')
const Intern = require('./lib/Intern.js')


var aux = '0';
const  employers = [];

function valideAnswer(name,email,id,Office,Github,School,Answer) {
    var auxName = name;
    var auxEmail = email;
    var auxId = id;
    var auxOffice = Office;
    var auxGitHub = Github;
    var auxSchool = School;
    var auxAnswer = Answer;
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
           var aux= Manager_.getRole();
           employers.push(aux);
           console.log(employers)
           runQuery()
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
        console.log("enginner")
        const engineer_ = new Enginner(auxName, auxEmail,
            auxId, auxGitHub);
            var aux=   engineer_.getRole();
            employers.push(aux);
            console.log(employers)
            runQuery()
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
              var aux=  interns_.getRole();
              employers.push(aux);
              console.log(employers)
            runQuery()
    }
}

function init(aux) {
    var name = ""
    if (aux === '0') {
        inquirer
            .prompt(Questions.questionsManager)
            .then((manager) => {
                const Manager_ = new Manager(manager.name, manager.email,
                    manager.id, manager.office);
                   var aux = Manager_.getRole();
                   if(aux){
                    employers.push(aux);
                    runQuery()
                   }
            })
        
    } else if (aux === '1') {
        inquirer
            .prompt(Questions.questionsEngineer)
            .then((engineer) => {
                const Enginner_ = new Enginner(engineer.name, engineer.email,
                    engineer.id, engineer.github);
                   var aux = Enginner_.getRole();
                   if(aux){
                    employers.push(aux);
                    runQuery()
                   }
               
            })
    } else if (aux === '2') {
        inquirer
            .prompt(Questions.questionsInterns)
            .then((interns) => {
                const Interns_ = new Intern(interns.name, interns.email,
                    interns.id, interns.school);
                   var aux = Interns_.getRole();
                   if(aux){
                    employers.push(aux);
                    runQuery()
                   }
                 
                 
                
            })
    }

}

init(aux);

function writeToFile() {
    var textDiv = ``;
    var menuDiv = ``;
    var aux = '';
    for (var i = 0; i < employers.length; i++) {
        console.log(employers[i][4])
        if (employers[i][4] === 'Manager') {
            aux = 'Numbe of Office';
            textDiv += `<div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                <h3>${employers[i][0]}</h3>
                                <h5> <i class="fas fa-calendar fa-1x text-gray-300"></i>     ${employers[i][4]}</h5>
                            </div>
                            </br>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <p>ID: ${employers[i][2]}</p>
                                <p>Email: <a href="mailto:${employers[i][1]}">${employers[i][1]}</a></p>
                                <p>${aux}: ${employers[i][3]}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>`;
            menuDiv += ` <li class="nav-item active">
                            <a class="nav-link" href="mailto:${employers[i][1]}">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                             <span>${employers[i][0]}</span></a>
                         </li>`;
        } else if (employers[i][4] === 'Enginner') {

            aux = 'Github';
            textDiv += `<div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                <h3>${employers[i][0]}</h3>
                                <h5> <i class="fas fa-calendar fa-1x text-gray-300"></i>     ${employers[i][4]}</h5>
                            </div>
                            </br>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <p>ID: ${employers[i][2]}</p>
                                <p>Email: <a href="mailto:${employers[i][1]}">${employers[i][1]}</a></p>
                                <p>${aux}: <a href="https://github.com/${employers[i][3]}"rel="noopener noreferrer" target="_blank">${employers[i][3]}</a></p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>`;
            menuDiv += ` <li class="nav-item active">
        <a class="nav-link" href="mailto:${employers[i][1]}">
        <i class="fas fa-fw fa-tachometer-alt"></i>
         <span>${employers[i][0]}</span></a>
     </li>`;
        } else if (employers[i][4] === 'Intern') {

            aux = 'School';
            textDiv += `
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                <h3>${employers[i][0]}</h3>
                                                <h5> <i class="fas fa-school fa-1x text-gray-300"></i>     ${employers[i][4]}</h5>
                                            </div>
                                            </br>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                                <p>ID: ${employers[i][2]}</p>
                                                <p>Email: <a href="mailto:${employers[i][1]}">${employers[i][1]}</a></p>
                                                <p>${aux}: ${employers[i][3]}</p>
   
                                            </div>
                                        </div>
   
                                    </div>
                                </div>
                            </div>
                        </div>`;
            menuDiv += ` <li class="nav-item active">
                            <a class="nav-link" href="mailto:${employers[i][1]}">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                             <span>${employers[i][0]}</span></a>
                         </li>`;
        }
    }
    var htmlContent = `<!DOCTYPE html>
            <html lang="en">
    
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <meta name="description" content="">
                <meta name="author" content="">
                <title>Employers</title>
                <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
                 <link href="bootstrap/css/sb-admin-2.min.css" rel="stylesheet">
                 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                 <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js "></script>
            </head>
    
            <body id="page-top">
                <div id="wrapper">
                    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div class="sidebar-brand-icon rotate-n-15">
                                <i class="fas fa-laugh-wink"></i>
                            </div>
                            <div class="sidebar-brand-text mx-3">My Team</div>
                        </a>
                         <hr class="sidebar-divider my-0">
                         ${menuDiv} 
                    </ul>
    
    
    
                    <div id="content-wrapper" class="d-flex flex-column">
                        <div id="content">
                            <div class="container-fluid">
                                <div class="row" >
                                   ${textDiv} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="bootstrap/vendor/jquery/jquery.min.js"></script>
                <script src="bootstrap/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="bootstrap/vendor/jquery-easing/jquery.easing.min.js"></script>
                <script src="bootstrap/js/sb-admin-2.min.js"></script>
                <script src="bootstrap/vendor/chart.js/Chart.min.js"></script>
                <script src="bootstrap/js/demo/chart-area-demo.js"></script>
                <script src="bootstrap/js/demo/chart-pie-demo.js"></script>
               
                <script src="index.js"></script>
                </body>
    
            </html>`;
    
    fs.writeFile('./dist/index.html', htmlContent, (err) => {
        if (err) throw err;
        console.log('Success');

    });
}


function runQuery() {
    inquirer
        .prompt(Questions.select)
        .then((Answers) => {
            if (Answers.listquestion === "Enginner") {
                init('1')
            } else if (Answers.listquestion === "Interns") {
                init('2')
            } else if (Answers.listquestion === 'Finish') {
                writeToFile();
            }
        })


}

