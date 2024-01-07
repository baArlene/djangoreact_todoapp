import React from "react";

const TodoForm = () => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto flex mb-6">
      <input
        type="text"
        placeholder="Enter Task"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <button className="btn btn-primary ml-3 text-xl">Add Task</button>
    </div>
  );
};

export default TodoForm;
