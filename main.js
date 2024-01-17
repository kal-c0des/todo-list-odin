/*
Brainstorm what kind of properties your todo-items are going to have.
At a minimum they should have a title, description, dueDate and priority.
You might also want to include notes or even a checklist.
*/

import { createToDo } from "./model/todo.js";
import { createToDoView } from "./view/todo-view.js";

let toDo1 = createToDo("Eat Pizza", "Veggies for days");

// console.log(toDo1);
// console.log(toDo1.getTitle());
// toDo1.setDescription("Supreme");
// console.log(toDo1.getTitle());

createToDoView(toDo1.getTitle(), toDo1.getDescription());
