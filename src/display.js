import createTodo from "./todo";

const mainContent = document.querySelector(".main-content");

export const renderProjects = (projects) => {
    projects.forEach((project) => {
        console.log(`${project.name}`);
    });
};

export const renderTodos = (todos, project, saveToStorage) => {
    
    mainContent.innerHTML = "";

    todos.forEach((todo, index) => {
        const card = document.createElement("div");
        card.classList.add("todo-card");

        const checkBox = document.createElement("input")
        checkBox.type = "checkbox";

        checkBox.addEventListener("click", () => {
            todo.completed = !todo.completed;
        });

        const title = document.createElement("h3");
        title.textContent = todo.title;

        const desc = document.createElement("p");
        desc.textContent = todo.description;

        const date = document.createElement("p");
        date.textContent = todo.dueDate;

        const button = document.createElement("button");
        button.textContent = "✕";


        button.addEventListener("click", () => {
            project.removeTodo(index);
            saveToStorage();
            renderTodos(project.todos, project);
        });

        card.appendChild(checkBox);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(date);
        card.appendChild(button);

        mainContent.appendChild(card);
    });

};




export const openModal = () => {
    const addTodoButtonNow = document.querySelector("#add-todo-button");
    const modal = document.querySelector(".modal");
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeButton = document.querySelector("#close-modal-window");


    addTodoButtonNow.addEventListener("click", () => {
        modal.classList.toggle("active");
        modalOverlay.classList.toggle("active");
        document.querySelector("#todo-title").value = "";
        document.querySelector("#todo-desc").value = "";
        document.querySelector("#todo-date").value = "";
        document.querySelector("#todo-prior").value = "low";
    });


    closeButton.addEventListener("click", () => {
        modal.classList.toggle("active");
        modalOverlay.classList.toggle("active");
    });
};






const button = document.querySelector("#add-todo-button-submit");

export const handleAddTodo = (project, saveToStorage) => {

    button.addEventListener("click", () => {
        const title = document.querySelector("#todo-title").value;
        const desc = document.querySelector("#todo-desc").value;
        const dueDate = document.querySelector("#todo-date").value;
        const prior = document.querySelector("#todo-prior").value;
    

        if (!title) {
            const toast = document.querySelector("#toast");
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 3000);
            return;
        }

        project.addTodo(createTodo(title, desc, dueDate, prior));
        saveToStorage();
        renderTodos(project.todos, project);

        document.querySelector(".modal-overlay").classList.toggle("active");
        document.querySelector(".modal").classList.toggle("active");
    });
};


    