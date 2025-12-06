import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItems: () => {},
  deleteNewItems: () => {},
});
// Reducer function → handles how todoItems state should change
const todoitemsReducer = (currenttodoItems, action) => {
  let newTodoItems = currenttodoItems;

  // If new item is added
  if (action.type === "New-items") {
    newTodoItems = [
      ...currenttodoItems,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  }
  // If an item is deleted
  else if (action.type === "Delete-items") {
    newTodoItems = currenttodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newTodoItems; // return updated list
};
const TodoItemsContextProvider = ({ children }) => {
  // useReducer → manages the todoItems array (state) using the reducer
  const [todoItems, dispatchtodoitems] = useReducer(todoitemsReducer, []);

  // Function to add a new todo item
  const addNewItems = (itemName, itemDate) => {
    const newItemAction = {
      type: "New-items",
      payload: { itemName, itemDate },
    };
    dispatchtodoitems(newItemAction); // send action to reducer with itemName, itemDate parameters
  };

  // Function to delete a todo item by name
  const deleteItems = (todoItemName) => {
    const deleteItemAction = {
      type: "Delete-items",
      payload: { itemName: todoItemName },
    };
    dispatchtodoitems(deleteItemAction); // send action to reducer itemName parameters
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        deleteItems,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
