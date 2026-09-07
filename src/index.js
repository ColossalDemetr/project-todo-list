import createTodo from "./todo";
import { createProject } from "./project";
import { renderProjects, renderTodos } from "./display";
















const project1 = createProject("Sickness");



project1.addTodo(createTodo("Yo", "Yeah", "tomorrow", "high"));
project1.addTodo(createTodo("yeah", "yo", "today", "medium"));

renderTodos(project1.todos);

