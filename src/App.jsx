import "./App.css";
import Date from "./components/Date";
import Header from "./components/Header";
import TaskManager from "./components/TaskManager";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <main className=" mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col">
        <Header />
        <Date />
        <TaskManager />
        <TodoForm/>
      </main>
    </>
  );
}

export default App;
