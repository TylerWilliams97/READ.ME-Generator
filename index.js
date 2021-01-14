const inquirer = require('inquirer');
const fs = require('fs')
function userinfo(){
    inquirer
    .prompt({
        type: 'input',
      message: 'Name your Readme',
      name: 'Readmename',
    })
    .then(answers =>{
        fs.appendFile('READMEuser.md', `${answers.Readmename}`, (err) =>
       
        err ? console.error(err) : console.log('Commit logged!')
      );
    })   
    

};
    

userinfo();












