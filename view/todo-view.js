export function createToDoView(title, description) {
  const TODO_CONTAINER = document.createElement("div");
  const TITLE = document.createElement("h2");
  const DESCRIPTION = document.createElement("p");
  const DELETE_BTN = document.createElement("button");

  TODO_CONTAINER.classList.add("todo-container");
  TITLE.textContent = title;
  DESCRIPTION.textContent = description;
  DELETE_BTN.textContent = "Delete";
  DELETE_BTN.addEventListener("click", (e) => {
    TODO_CONTAINER.remove();
  });

  TODO_CONTAINER.append(TITLE, DESCRIPTION, DELETE_BTN);
  const render = (htmlElement) => {
    htmlElement.append(TODO_CONTAINER);
  };
  const remove = () => {
    TODO_CONTAINER.remove();
  };
  return { render, remove };
}
