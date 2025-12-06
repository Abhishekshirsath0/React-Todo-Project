import "./styles/index.css";
import AddTodo from "./component/AddTodo.jsx";
import TodoItemsContextProvider from "./store/todo-items-store.jsx";
import WelcomeMsg from "./component/WelcomeMsg.jsx";
import TodoItems from "./component/TodoItems.jsx";
import styles from "./styles/App.module.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className={styles.wrapper}>
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
