const fs = require('fs');

let todoList = [];

const save = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('./db/data.json', data,(error) => {
        if(error) {
            throw new Error(`Can't save data`, error);
        }
    })
}

const load = () => {
    try {
        todoList = require('../db/data.json');    
    } catch (error) {
        todoList = [];
    }
    
}

const list = () => {
    load();
    //let arrayList = JSON.parse(todoList);
    return todoList;
}

const deleteTask = (description) => {
    load();
    let find = false;
    let deletedTask;
    for (task of todoList) {
        if(task.description == description) {
            find = true;
            deletedTask = task;
            var index = todoList.indexOf(task);
            if (index >= 0) {
                todoList.splice(index,1);
                return deletedTask;
            } else {
                throw new Error ('Task not found');
                return false;
            }
        }
    }
    if (!find) {
        throw new Error ('Task not found');
    }
    return deletedTask;
    
}

const update = (description) => {
    load();
    let find = false;
    let updatedTask;
    for (var i=0, j=todoList.length; i<j; i++) {
        if (todoList[i].description === description) {
            todoList[i].completed = true;
            find = true;
            updatedTask = todoList[i];
        }
    }
    if (!find) {
        throw new Error ('Task not found');
        return false;
    }
    
    save();
    return updatedTask;
}


const create = (description) => {
    load();
    let todotask = {
        description,
        completed: false
    };

    todoList.push(todotask);
    save();

    return todotask;
}

module.exports = {
    create,
    list,
    update,
    deleteTask
}