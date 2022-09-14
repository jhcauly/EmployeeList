const questionsManager = [{
    type: 'input',
    name: 'name',
    message: 'Whats it the Name?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is the Email?',
},
{
    type: 'input',
    name: 'id',
    message: 'What is the ID?'
},
{
    type: 'input',
    name: 'office',
    message: 'Number of Office?'
}
];

const select = [{
type: 'list',
name: 'listquestion',
message: 'Select what do you witch Employer do you want creat',
choices: ['Enginner', 'Interns', 'Finish'],
default: 'Enginner'
}];

const questionsEngineer = [{
    type: 'input',
    name: 'name',
    message: 'Whats it the Name?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is the Email?',
},
{
    type: 'input',
    name: 'id',
    message: 'What is the ID?'
},
{
    type: 'input',
    name: 'github',
    message: 'Username of Github?'
}
];
const questionsInterns = [{
    type: 'input',
    name: 'name',
    message: 'Whats it the Name?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is the Email?',
},
{
    type: 'input',
    name: 'id',
    message: 'What is the ID?'
},
{
    type: 'input',
    name: 'school',
    message: 'School of Interns?'
}
];
module.exports = {questionsManager,select,questionsEngineer,questionsInterns};