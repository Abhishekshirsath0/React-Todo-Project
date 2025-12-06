import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "../styles/App.module.css";

function TodoItems() {
  const { todoItems, deleteItems } = useContext(TodoItemsContext);

  return (
    <ul className={styles.list}>
      {todoItems.map((item, index) => (
        <li key={index} className={styles.item}>
          <span>
            {item.name} - {item.date}
          </span>
          <button
            className={styles.deleteBtn}
            onClick={() => deleteItems(item.name)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;
