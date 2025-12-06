import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMsg() {
  const { todoItems } = useContext(TodoItemsContext);

  if (todoItems.length === 0) {
    return (
      <p style={{ textAlign: "center" }}> Welcome! Add your first Todo.</p>
    );
  }

  return null;
}

export default WelcomeMsg;
