const inquirer = require('inquirer');
const fs = require('fs')






















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
    }])
    .then(answers =>{
        const Readme= console.log("help")

          

                
                






        

        fs.appendFileSync('newREADME.md', `${Readme}`, (err) =>
       
        err ? console.error(err) : console.log('Commit logged!')
      );
    })   
    

};


    

userinfo();












