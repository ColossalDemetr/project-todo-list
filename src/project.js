export function createProject(projectName) {

    let todos = [];

    const addTodo = (todo) => {
        todos.push(todo);
    };


    return { name: projectName, todos, addTodo };


};