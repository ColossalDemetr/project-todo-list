import createTodo from "./todo";
import { createProject } from "./project";
import { renderProjects } from "./display";



const project1 = createProject("Business trip");
const project2 = createProject("Local Wedding");
const project3 = createProject("Travel Plans");


const render = renderProjects([project1, project2, project3]);

console.log(render)