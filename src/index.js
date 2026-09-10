import createTodo from "./todo";
import { createProject } from "./project";
import { handleAddTodo, renderProjects, renderTodos } from "./display";
import { openModal } from "./display";


openModal();



const defaultProject = createProject("Default");


// Local storage

const saveToStorage = () => {
    localStorage.setItem("project", JSON.stringify(defaultProject));
};

renderProjects([defaultProject], saveToStorage);

const loadFromStorage = () => {
    return JSON.parse(localStorage.getItem("project"));
};


handleAddTodo(defaultProject, saveToStorage)

const saved = loadFromStorage();

if (saved) {
    saved.todos.forEach(todo => defaultProject.addTodo(todo));
}

renderTodos(defaultProject.todos, defaultProject, saveToStorage);
