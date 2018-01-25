/**
 * Check if a Version Bump is needed
 */

var inquirer = require('inquirer');
var shell = require('shelljs');

var questions = [
  {
    type: 'confirm',
    name: 'bump',
    message: 'Would you like to bump the version (just hit enter for NO)?',
    default: false
  },
  {
    type: 'list',
    name: 'version',
    message: 'What are we bumping?',
    choices: ['Patch', 'Minor', 'Major'],
    when: function(answers) {
      return answers.bump;
    },
    filter: function(val) {
      return val.toLowerCase();
    }
  }
];

inquirer.prompt(questions).then(answers => {
  if (answers.bump) {
    shell.echo('Bumping our ' + answers.version + ' version ');
    shell.exec('npm version ' + answers.version);
  } else {
    console.log('Okay, carry on...');
  }
});
