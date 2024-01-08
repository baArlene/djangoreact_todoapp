import React, { useState } from "react";
import axios from "axios";

const TodoForm = ({ setTodos, getData }) => {
  const [newTodo, setNewTodo] = useState({
    body: "",
  });

  const handleChange = (e) => {
    setNewTodo((prev) => ({
      ...prev,
      body: e.target.value,
    }));
    console.log(newTodo);
  };

  const postTodo = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/todo/", newTodo);
      setNewTodo({'body':''})
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-11/12 max-w-4xl mx-auto flex mb-6">
      <input
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            postTodo();
          }
        }}
        value={newTodo.body}
        type="text"
        placeholder="Enter Task"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <button onClick={postTodo} className="btn btn-primary ml-3 text-xl">
        Add Task
      </button>
    </div>
  );
};

export default TodoForm;
