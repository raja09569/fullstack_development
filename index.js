#!/usr/bin/node
// const inquirer = require("inquirer");
var shell = require('shelljs');

// slice argv as we don't need the forst two elements (in this case)
const args = process.argv.slice(2, process.argv.length);
// console.log(args);
if(args.length <= 0) {
    shell.echo('Sorry, this script requires Atleast one Argument');
    shell.exit(1);
}
const projectName = args[0];

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

//Creating directory
shell.mkdir(projectName);

// Copy files to release dir

//Change direcotry
shell.cd(projectName);

//Create package.json file with project name
shell.exec("npm set init.author.email 'rajashekar0569@gmail.com'");
shell.exec("npm set init.author.name 'Rajashekar Makam'");
shell.exec("npm set init.license 'MIT'");
shell.exec("npm init -y");

//Creating React project



/* const questions = [{
        type: "input",
        name: "projectName",
        message: "It's a Next.js, Redux, styled-Components template. Please enter your new project's name.",
        default: "nrs-project"
}];

inquirer.prompt(questions).then(answers => {
    const { projectName } = answers;
    
    //Do something
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    }
    
    //Creating directory
    shell.mkdir(projectName);
 
    // Copy files to release dir
   
    //Change direcotry
    shell.cd(projectName);

    //Create package.json file with project name
    shell.exec("npm set init.author.email 'rajashekar0569@gmail.com'");
    shell.exec("npm set init.author.name 'Rajashekar Makam'");
    shell.exec("npm set init.license 'MIT'");
    shell.exec("npm init -y");
    shell.exec("npm i --save concurrently");

    //add script command
    // shell.sed('-i', 'scripts', '', 'package.json');
      
}); */

/* 
var shell = require('shelljs');
if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}
// Copy files to release dir
shell.rm('-rf', 'out/Release');
shell.cp('-R', 'stuff/', 'out/Release'); */