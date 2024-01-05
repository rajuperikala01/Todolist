import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filtered, setFiltered] = useState([]);
  
  useEffect(() => {
    getLocal();
  },[])

  useEffect(() => {
    statusHandler();
    saveToLocal();
  }, [status, todos]);

  function statusHandler() {
    switch (status) {
      case "Completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFiltered(todos.filter((todo) => todo.completed !== true));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }

  function saveToLocal() {
    if(localStorage.getItem("data") === null){
        localStorage.setItem("data", JSON.stringify([]));
      }

    else if(localStorage.getItem("data") !== null && todos.length !== 0){
      localStorage.setItem("data", JSON.stringify(todos));
    }
  }

  function getLocal() {
    if(localStorage.getItem("data")===null){
      localStorage.setItem("data", JSON.stringify([]))
    }
    let data = JSON.parse(localStorage.getItem("data"));
    setTodos(data);
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        filtered={filtered}
        setFiltered={setFiltered}
        setStatus={setStatus}
      />
      <List todos={todos} setTodos={setTodos} filtered={filtered} />
    </div>
  );
}

export default App;
