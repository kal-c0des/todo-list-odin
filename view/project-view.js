export function createProjectView(title) {
  const PROJECT_CONTAINER = document.createElement("div");
  const TITLE_VIEW = document.createElement("h2");

  TITLE_VIEW.textContent = title;

  PROJECT_CONTAINER.classList.add("project-container");
  PROJECT_CONTAINER.append(TITLE_VIEW);

  const loadToDoItems = (toDoViews) => {
    for (const toDoView of toDoViews) {
      toDoView.render(PROJECT_CONTAINER);
    }
  };

  const render = (view) => {
    view.append(PROJECT_CONTAINER);
  };

  return { render, loadToDoItems };
}
