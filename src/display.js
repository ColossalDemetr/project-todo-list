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

export const openModal = () => {
    const addTodoButtonNow = document.querySelector("#add-todo-button");
    const modal = document.querySelector(".modal");
    const modalOverlay = document.querySelector(".modal-overlay");

    addTodoButtonNow.addEventListener("click", () => {
        modal.classList.toggle("active");
        modalOverlay.classList.toggle("active")
    });
};