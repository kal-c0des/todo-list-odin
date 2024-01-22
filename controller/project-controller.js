import { createProjectView } from "../view/project-view.js";
import { createToDoView } from "../view/todo-view.js";

export function createProjectController(projectModel) {
  const projectView = createProjectView("yessah");
  const toDoViews = [];

  for (const todo of projectModel.getItems) {
    const toDoView = createToDoView(todo.getTitle(), todo.getDescription());
    toDoViews.push(toDoView);
  }

  // pass through
  function render(view) {
    projectView.render(view);
    projectView.loadToDoItems(toDoViews);
  }

  return { render };
}
