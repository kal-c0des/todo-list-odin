export function createToDo(title, description, dueDate) {
  const setTitle = (newTitle) => {
    if (typeof newTitle !== "string" && newTitle.trim() === "") {
      throw new Error("Title must be a valid string");
    }
    title = newTitle;
  };

  const getTitle = () => {
    return title;
  };

  const getDescription = () => {
    return description;
  };

  const getDueDate = () => {
    return dueDate;
  };

  return { setTitle, getTitle, getDescription, getDueDate };
}
