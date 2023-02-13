import "./App.css";
import TodoList from "./compo/TodoList";
import TodoInput from "./compo/TodoInput";
function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
