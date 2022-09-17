const questionsManager = [{
    type: 'input',
    name: 'name',
    message: 'Whats is the Manager name?',
},
{
    type: 'input',
    name: 'email',
    message: 'Whats is the Manager Email?',
},
{
    type: 'input',
    name: 'id',
    message: 'Whats is the Manager ID?'
},
{
    type: 'input',
    name: 'office',
    message: 'Whats is the Manager Office?'
}
];

const select = [{
type: 'list',
name: 'listquestion',
message: 'Choose the employer you would like to create a position with',
choices: ['Enginner', 'Interns', 'Finish'],
default: 'Enginner'
}];

const questionsEngineer = [{
    type: 'input',
    name: 'name',
    message: 'Whats is the Enginner Name?',
},
{
    type: 'input',
    name: 'email',
    message: 'Whats is the Enginner Email?',
},
{
    type: 'input',
    name: 'id',
    message: 'Whats is the Enginner ID?'
},
{
    type: 'input',
    name: 'github',
    message: 'Whats is the Enginner Username of Github?'
}
];
const questionsInterns = [{
    type: 'input',
    name: 'name',
    message: 'Whats is the Intern Name?',
},
{
    type: 'input',
    name: 'email',
    message: 'Whats is the Intern Email?',
},
{
    type: 'input',
    name: 'id',
    message: 'Whats is the Intern ID?'
},
{
    type: 'input',
    name: 'school',
    message: 'Whats is the Intern School?'
}
];
module.exports = {questionsManager,select,questionsEngineer,questionsInterns};