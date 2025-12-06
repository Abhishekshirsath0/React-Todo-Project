import { useContext, useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "../styles/App.module.css"; // ✅ use same module

function AddTodo() {
  const { addNewItems } = useContext(TodoItemsContext);

  const [itemName, setitemName] = useState("");
  const [itemDate, setitemDate] = useState("");

  const handleAddButtonClicked = () => {
    if (itemName.length === 0 || itemDate.length === 0) return;
    addNewItems(itemName, itemDate);
    setitemName("");
    setitemDate("");
  };

  return (
    <div className={styles.addRow}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter Todo Here"
        value={itemName} // current value that are in input box
        onChange={(e) => setitemName(e.target.value)}
      />
      <input
        className={styles.input}
        type="date"
        value={itemDate}
        onChange={(e) => setitemDate(e.target.value)}
      />
      <button
        type="button"
        className={styles.addBtn}
        onClick={handleAddButtonClicked}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
