import createTodo from "./todo";
import { createProject } from "./project";
import { handleAddTodo, renderProjects, renderTodos } from "./display";
import { openModal } from "./display";





openModal();
// handleAddTodo();


const defaultProject = createProject("Default");
handleAddTodo(defaultProject);