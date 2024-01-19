/*
Brainstorm what kind of properties your todo-items are going to have.
At a minimum they should have a title, description, dueDate and priority.
You might also want to include notes or even a checklist.
*/
import { createToDo } from "./model/todo.js";
import { createToDoView } from "./view/todo-view.js";

const createToDoForm = document.getElementById("create-todo");
const mainContentView = document.querySelector(".main-content");
const sidebarView = document.querySelector(".sidebar");
const listContainer = document.querySelector("#list-container");

createToDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = createToDoForm.elements;

  const toDoItem = createToDo(
    formData["title"].value,
    formData["description"].value
  );

  toDoList.push(toDoItem);
  renderList();
});

let toDo1 = createToDo("Eat Pizza", "Veggies for days");
let toDo2 = createToDo("Drink Coffee", "Just black");

// console.log(toDo1);
// console.log(toDo1.getTitle());
// toDo1.setDescription("Supreme");
// console.log(toDo1.getTitle());

const toDoList = [
  createToDo("Eat Pizza", "Veggies for days"),
  createToDo("Drink Coffee", "Just black"),
  createToDo("Wash Dog", "He stinks"),
  createToDo("Sell car", "It sucks"),
  createToDo("Take nap", "I'm sleepy"),
];

const renderList = () => {
  listContainer.innerHTML = "";
  for (const toDo of toDoList) {
    createToDoView(toDo.getTitle(), toDo.getDescription()).render(
      listContainer
    );
  }
};
renderList();
