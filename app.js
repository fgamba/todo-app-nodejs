//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const todotask = require('./todo/todo');

let command = argv._[0];

switch(command) {
    case 'create':
        let task = todotask.create(argv.description);
        console.log( task );
        break;
    case 'list':
        let list = todotask.list();
        for(let task of list) {
            console.log(`Description: ${task.description} \n`);
        }
        break;
    case 'update':
        let updatedTask = todotask.update(argv.description);
        console.log(`Updated task: ${updatedTask.description}`);
        break;
    case 'deleteTask':
        let deletedTask = todotask.deleteTask(argv.description);
        console.log(`Deleted task: ${deletedTask.description}`);
        break;
    default:
        console.log('no task defined');
        

}
