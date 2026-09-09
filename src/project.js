export function createProject(projectName) {

    let todos = [];

    const addTodo = (todo) => {
        todos.push(todo);
    };



    const removeTodo = (index) => {
        todos.splice(index, 1);
    };



    return { name: projectName, todos, addTodo, removeTodo};
};