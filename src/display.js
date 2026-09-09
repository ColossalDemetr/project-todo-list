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
        // Main Container
        const card = document.createElement("div");
        card.classList.add("todo-card");


        // Main todo div For TITLE & CHECKBOX
        const mainTodoDiv = document.createElement("div");
        mainTodoDiv.classList.add("main-todo-div");

        const checkBox = document.createElement("input")
        checkBox.type = "checkbox";
        checkBox.classList.add("main-todo-div");

        checkBox.addEventListener("click", () => {
            todo.completed = !todo.completed;
        });

        const title = document.createElement("h3");
        title.textContent = todo.title;
        title.classList.add("main-todo-div");

        // Button DIV

        const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("main-todo-div-button");

        const button = document.createElement("button");
            button.textContent = "✕";
            button.id = "button-to-delete-todo";
            button.classList.add("main-todo-div-button");

        button.addEventListener("click", () => {
            project.removeTodo(index);
            saveToStorage();
            renderTodos(project.todos, project);
        });


        // Description

        const divForDescriptionAndDateAndPriority = document.createElement("div");
        divForDescriptionAndDateAndPriority.classList.add("div__for__desciprtion__and__priority__and__date");
        const divForDescriptionSolely = document.createElement("div");
        divForDescriptionSolely.classList.add("div__for__description");
        const divForPriorityAndDate = document.createElement("div");
        divForPriorityAndDate.classList.add("div__for__date__and__priority");


        const desc = document.createElement("p");
        desc.textContent = todo.description;

        const date = document.createElement("p");
        date.textContent = todo.dueDate;

        const priority = document.createElement("p");
        priority.textContent = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);
        priority.classList.add(`priority-${todo.priority}`);

        const divider = document.createElement("div");
        divider.id = "divider__todo";
        

        card.appendChild(buttonDiv);
        buttonDiv.appendChild(button);
        card.appendChild(mainTodoDiv);
        mainTodoDiv.appendChild(checkBox);
        mainTodoDiv.appendChild(title);

        card.appendChild(divForDescriptionAndDateAndPriority);
        card.appendChild(divForDescriptionSolely);
        card.appendChild(divForPriorityAndDate);

        divForDescriptionAndDateAndPriority.appendChild(divForDescriptionSolely);
        divForDescriptionAndDateAndPriority.appendChild(divForPriorityAndDate);
        divForDescriptionSolely.appendChild(desc);
        divForPriorityAndDate.appendChild(date);
        divForPriorityAndDate.appendChild(priority);
        card.appendChild(divider);
        

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


    