#!/usr/bin/node

const inquirer = require("inquirer");
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "It's a Next.js, Redux, styled-Components template. Please enter your new project's name.",
        default: "nrs-project"
    }
];
inquirer.prompt(questions).then(answers => {
    const { projectName } = answers;
    //Do something
});

var shell = require('shelljs');
if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}
// Copy files to release dir
shell.rm('-rf', 'out/Release');
shell.cp('-R', 'stuff/', 'out/Release');