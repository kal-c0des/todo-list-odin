export function createToDoView(title, description) {
  const TODO_CONTAINER = document.createElement("div");
  const TITLE = document.createElement("h2");
  const DESCRIPTION = document.createElement("p");

  TODO_CONTAINER.classList.add("todo-container");
  TITLE.textContent = title;
  DESCRIPTION.textContent = description;

  TODO_CONTAINER.append(TITLE, DESCRIPTION);
  document.body.append(TODO_CONTAINER);
}
