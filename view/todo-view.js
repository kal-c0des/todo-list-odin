export function createToDoView(title, description, dueDate) {
  const TODO_CONTAINER = document.createElement("div");
  const TITLE = document.createElement("h1");
  const DESCRIPTION = document.createElement("p");
  const DUE_DATE = document.createElement("p");
  const DELETE_BTN = document.createElement("button");

  TODO_CONTAINER.classList.add("todo-container");
  TITLE.textContent = title;

  DESCRIPTION.classList.add("todo-sm-container");
  DESCRIPTION.classList.add("hide");
  DESCRIPTION.textContent = description;

  DUE_DATE.classList.add("todo-sm-container");
  DUE_DATE.classList.add("hide");
  DUE_DATE.textContent = dueDate;

  DELETE_BTN.textContent = "Delete";
  DELETE_BTN.addEventListener("click", (e) => {
    TODO_CONTAINER.remove();
    TITLE.remove();
    DESCRIPTION.remove();
  });

  const remove = () => {
    TITLE.remove();
    DESCRIPTION.remove();
    DUE_DATE.remove();
    DELETE_BTN.remove();
  };

  TODO_CONTAINER.addEventListener("click", function () {
    DESCRIPTION.classList.toggle("show");
    DUE_DATE.classList.toggle("show");
  });

  TODO_CONTAINER.append(TITLE, DESCRIPTION, DUE_DATE, DELETE_BTN);

  const render = (view) => {
    view.append(TODO_CONTAINER);
  };

  return { render, remove };
}
