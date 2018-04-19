const argv = require('yargs')
                    .command('create', 'Create a task', {
                        description: {
                            demand:true,
                            alias: 'd'
                        }
                    })
                    .command('update', 'Update a task', {
                        description: {
                            demand:true,
                            alias: 'd'
                        },
                        completed: {
                            default:true,
                            alias: 'c'
                        }
                    })
                    .command('deleteTask', 'Delete a task', {
                        description: {
                            demand:true,
                            alias: 'd'
                        }
                    })
                    .help()
                    .argv;

module.exports = {
    argv
}