import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "../Component/Todo.module.css";
const Todo = () => {
  const [todo, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetch(`http://localhost:9090/todos`);
      res = await res.json();
      setTodos(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async (text) => {
    let res = await fetch(`http://localhost:9090/todos`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: text,
      }),
    });

    res = await res.json();
    setTodos([...todo, res]);
  };

  const handleDelete = (id) => {
    const udpateData = todo.filter((e) => e.id !== id);
    setTodos(udpateData);
  };

  return (
    <div>
      <TodoItem handleAdd={handleAdd}></TodoItem>

      <button onClick={fetchData}>GET TASKS</button>

      <ul className={styles.ulContainer}>
        {todo.map((e) => (
          <li className={styles.bul} key={e.id}>
            {e.title}
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
