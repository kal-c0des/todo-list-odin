/*
Brainstorm what kind of properties your todo-items are going to have.
At a minimum they should have a title, description, dueDate and priority.
You might also want to include notes or even a checklist.
*/
import { createToDo } from "./model/todo.js";
import { createProject } from "./model/project.js";
import { createProjectController } from "./controller/project-controller.js";

const CONTENT_VIEW = document.querySelector(".main-content");
const PROJECT_LIST = document.querySelector(".project-list");
const NEW_PROJECT_FORM = document.querySelector("#create-project");

// const sideBar = document.querySelector(".sidebar");
const form = document.querySelector("#create-todo");
const projectBtn = document.querySelector(".project-creator");
const projectGenerate = document.querySelector(".new-project");
const filterVisible = document.querySelector(".show-filters");
const filterItems = document.querySelector(".filters");

const projects = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = form.elements;

  let newToDoItem = createToDo(
    data["title"].value,
    data["description"].value,
    data["due-date"].value
  );
  const itemView = createToDoView(
    newToDoItem.getTitle(),
    newToDoItem.getDescription(),
    newToDoItem.getDueDate()
  );
  itemView.render(CONTENT_VIEW);
});

projectBtn.addEventListener("click", () => {
  projectGenerate.classList.toggle("show");
});

filterVisible.addEventListener("click", () => {
  filterItems.classList.toggle("show");
});

NEW_PROJECT_FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = NEW_PROJECT_FORM.elements;
  const newProjectName = formData["project-name"].value;
  console.log(newProjectName);
  const newProject1 = createProject(newProjectName);
  projects.push(newProject1);
  console.log(projects);
  renderProjectList();
});

function renderProjectList() {
  for (const project of projects) {
    const PROJECT_TITLE = document.createElement("h3");
    PROJECT_TITLE.textContent = project.getName();
    PROJECT_LIST.append(PROJECT_TITLE);
  }
}

const toDoList = [
  createToDo("Eat Pizza", "Veggies for days", 1),
  createToDo("Drink Coffee", "Just black", 2),
  createToDo("Wash Dog", "He stinks", 3),
  createToDo("Sell car", "It sucks", 4),
  createToDo("Take nap", "I'm sleepy", 5),
];

// const renderList = () => {
//   listContainer.innerHTML = "";
//   for (const toDo of toDoList) {
//     createToDoView(toDo.getTitle(), toDo.getDescription()).render(
//       listContainer
//     );
//   }
// };
// renderList();

// Code along 1.19.24

const sampleProject = createProject("sample", toDoList);

const sampleController = createProjectController(sampleProject);

sampleController.render(CONTENT_VIEW);
