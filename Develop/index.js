// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your application?', 
    'What is the description of your application?',
    'How do you install your application?',
    'How should people use your application?',
    'What are any licenses used to create your application?',
    'Who are those that contributed to the development of your application?',
    'What are the test instructions for your application?',
    'What is your GitHub Username?',
    'What is your email?'
];

inquirer.prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: questions[4],
        name: 'licenses',
        choices: ['1', '2', '3']
    },
    {
        type: 'input',
        message: questions[5],
        name: 'contributers',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'testing',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'username',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    },
])
.then((response) => {
    console.log(response)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
