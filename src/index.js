import createTodo from "./todo";
import { createProject } from "./project";

const project = createProject("Business trip");

const todoli = project.addTodo(createTodo("Meet couple partners", "Explain to them that they're stuff they offering is trash asf", "26.06.2026", "high"));



console.log(project)