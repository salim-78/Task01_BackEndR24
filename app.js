const yargs = require('yargs')

const data = require('./data.js')

yargs.command({
    command: 'add-note',
    describe: 'add a new note',
    builder: {

        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log('adding a new note');  
        data.addNote(argv.title, argv.body)             
    }
})

yargs.command({
    command: 'remove-note',
    describe: 'remove a new note',
    builder: {
        id: {
            describe: 'note id',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        // console.log('removing a new note');  
        console.log(argv)
        data.removeNote(argv.id)
        
    }

})

yargs.command({
    command: 'list-notes',
    describe: 'list all notes',
    handler: function () {
        data.listNotes()
    }
})

yargs.command({
    command: 'read-note',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        data.readNote(argv.title)
    }
})



console.log(yargs.argv)