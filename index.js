// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'project title',
    },
    // {
    //     type: 'Input',
    //     message: 'Describe your project',
    //     name: 'project description',
    // },
    // {
    //     type: 'input',
    //     message: 'If required, enter installation instructions',
    //     name: 'installation instruction',
    // },
    // {
    //     type: 'input',
    //     message: 'If available, enter usage information',
    //     name: 'usage information',
    // },
    // {
    //     type: 'input',
    //     message: 'If available, enter contribution guidelines',
    //     name: 'contribution guidelines',
    // },
    // {
    //     type: 'input',
    //     message: 'If available, enter test instructions',
    //     name: 'test instructions',
    // },
    // {
    //     type: 'list',
    //     message: 'Choose a license for application',
    //     name: 'lice choice',
    //     choices: ['choice1', 'choice2', 'choice3'],
    // },
    // {
    //     type: 'input',
    //     message: 'Enter GitHub username',
    //     name: 'Github username',
    // },
    // {
    //     type: 'input',
    //     message: 'Enter email address',
    //     name: 'Github username',
    // },
]
// .then(answers => {
//     console.info('Answers:', answers);
// })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("success!")
    });
}
//return fs.writeFileAsync


// TODO: Create a function to initialize app
function init() { }
//^ call inquire .prompt ().then
// invoke writeToFile (readme.md, )

// Function call to initialize app
init();
