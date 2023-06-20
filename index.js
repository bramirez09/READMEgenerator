// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('./utils/generateMarkdown.js');

function generateMarkdown(data) {
    return `# ${data.project_title}

    ${renderLicense(license)}

    ## Description:
     ${data.project_description}

    
    ## Table of Contents


    ## Installation 
     ${data.installation_instruction}


    ## Usage:
     ${data.usage_information}


    ## Contribution: 
     ${data.contribution_guidelines}


    ## Tests:
     ${data.test_instructions}


    ## License:
     The product is license under ${data.license_choice}.
     


    ## Questions
    For any questions, please contact me @ 
    https://github.com/${data.Github_username}
    or
    Email: ${data.email}
  `;
  }



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'project_title',
    },
    {
        type: 'Input',
        message: 'Describe your project',
        name: 'project_description',
    },
    {
        type: 'input',
        message: 'If required, enter installation instructions',
        name: 'installation_instruction',
    },
    {
        type: 'input',
        message: 'If available, enter usage information',
        name: 'usage_information',
    },
    {
        type: 'input',
        message: 'If available, enter contribution guidelines',
        name: 'contribution_guidelines',
    },
    {
        type: 'input',
        message: 'If available, enter test instructions',
        name: 'test_instructions',
    },
    {
        type: 'list',
        message: 'Choose a license for application',
        name: 'license_choice',
        choices: ['Apache 2.0', 'IBM', 'MIT'],
    },
    {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'Github_username',
    },
    {
        type: 'input',
        message: 'Enter email address',
        name: 'email',
    },
]
// license function
const renderLicense = (license) => {
    if (license == "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license == "Apache 2.0") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (license == "IBM") {
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (license == "None") {
      return "No Licenses were used.";
    } else {
      return "";
    }
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName,data);
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("success!")
    });
}
//return fs.writeFileAsync 


// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then ((answers) => {
        const contentForMd = generateMarkdown (answers);
        //console.log(contentForMd);
        writeToFile("./utils/READMEsample.md",contentForMd);
    })
}
//^ call inquire .prompt ().then
// invoke writeToFile (readme.md, )

// Function call to initialize app
init();
