const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');


//list of inquirer inputs for readme
function userinfo(){
    inquirer
    .prompt([
    {
        type: 'input',
      message: 'Name your Readme',
      name: 'title'
    },
    {
      type:'input',
      message:'project description',
      name:'description'
    },
    {
      type:'input',
      message:'installation info',
      name:'install'
    },
    {
      type:'input',
      message:'usage info',
      name:'usage'

    },
    {
      type:'input',
      message:'contribution-guidlines',
      name:'contribution'
    },
    {
      type:'input',
      message:'testing info',
      name:'tests'
    },
    {
      type:'list',
      message:'choose your license',
      name:'license',
      choices:['Academic Free License v3.0','Apache license 2.0','Artistic license 2.0','Boost Software License 1.0']
    },{
      type:'input',
      message:'contact info',
      name:'questions'
    }])
    //once user input is logged use info to create readme
    //generate markdown found in utils
    .then(answers =>{


      fs.appendFileSync('newREADME.md', generateMarkdown(answers) , (err) =>

        err ? console.error(err) : console.log('Commit logged!')
      );
    })   
    

};
//call function to create readme
userinfo();