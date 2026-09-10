import { createProject } from "./project";
import { handleAddTodo, renderProjects, renderTodos } from "./display";
import { openModal } from "./display";

openModal();

let projects = [createProject("Default")];
let currentProject = projects[0];

const saveToStorage = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
};

const loadFromStorage = () => {
    return JSON.parse(localStorage.getItem("projects"));
};

const saved = loadFromStorage();
if (saved) {
    projects = saved.map(p => {
        const project = createProject(p.name);
        p.todos.forEach(todo => project.addTodo(todo));
        return project;
    });
    currentProject = projects[0];
}

const rerender = () => {
    renderProjects(projects, saveToStorage, (project) => {
        currentProject = project;
        renderTodos(currentProject.todos, currentProject, saveToStorage);
    }, currentProject, (projectToDelete) => {
        projects.splice(projects.indexOf(projectToDelete), 1);
        if (projects.length === 0) projects.push(createProject("Default"));
        currentProject = projects[0];
        saveToStorage();
        rerender();
        renderTodos(currentProject.todos, currentProject, saveToStorage);
    });
};

rerender();
renderTodos(currentProject.todos, currentProject, saveToStorage);
handleAddTodo(() => currentProject, saveToStorage);

document.querySelector("#add-project-button").addEventListener("click", () => {
    const name = prompt("Project name:");
    if (!name) return;
    const newProject = createProject(name);
    projects.push(newProject);
    currentProject = newProject;
    saveToStorage();
    rerender();
    renderTodos(currentProject.todos, currentProject, saveToStorage);
});