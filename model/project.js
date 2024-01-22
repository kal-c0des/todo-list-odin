export function createProject(name, toDoItems = []) {
  const getName = () => {
    return name;
  };

  const getItems = () => {
    return toDoItems;
  };

  const addItem = (item) => {
    toDoItems.push(item);
  };

  function logItems() {
    console.log("project items: ", toDoItems);
  }

  return { getName, getItems, addItem, logItems };
}
