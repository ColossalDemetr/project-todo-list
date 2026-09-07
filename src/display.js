export const renderProjects = (projects) => {
    projects.forEach((project) => {
        console.log(`${project.name}`);
    });
};

export const renderTodos = (todos) => {
    const mainContent = document.querySelector(".main-content");


    todos.forEach((todo) => {
        const newp = document.createElement("p");

        newp.textContent = `${todo.title}`;

        mainContent.appendChild(newp)
    });
    
};