import AddToDoInput from "./components/AddToDoInput";
import ListToDo from "./components/ListToDo";
import "../src/App.css";
import { useState } from "react";
import noteImage from "./assets/note_img.png";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = { id: crypto.randomUUID(), name: name };
    setTodoList([...todoList, newTodo]);
  };

  const DeleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };

  return (
    <div className="container">
      <div className="title">TO DO APP</div>
      <AddToDoInput addNewTodo={addNewTodo} />
      {todoList.length > 0 ? (
        <ListToDo todoList={todoList} DeleteTodo={DeleteTodo} />
      ) : (
        <img src={noteImage} className="note-image" />
      )}
    </div>
  );
};

export default App;
