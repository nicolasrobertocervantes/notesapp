//const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');

//Add, remove, read, list

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder : {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder : {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

//List notes
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(){
        notes.listNotes();
    }
})

//Read notes
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder : {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})



console.log(yargs.argv);


//console.log(process.argv);
//const command = process.argv[2];
// if(command === 'add') {
//     console.log('Adding note');
// }
// else if(command === 'remove'){
//     console.log('Removing note');
// }





// const msg = getNotes();
// console.log(msg);

// //console.log(validator.isEmail('nicerlion@gmail.com'))
// console.log(chalk.green.inverse.bold('sucess'));

// console.log(process.argv[2]);


// const fs = require('fs');
// //fs.writeFileSync('notes.txt', 'This file Nicolas');
// fs.appendFileSync('notes.txt', 'This file Nicolas 2');

//************************** */

// const add = require('./utils.js');
// //const name = 'Nicolas';
// const sum = add(4, 3);
// console.log(sum);


