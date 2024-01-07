import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Table from "./components/Table";

function App() {
  return (
    <div className="bg-teal-900 text-white">
      <nav className="p-8">
        <h1 className="text-5xl text-center font-semibold">Todo App</h1>
      </nav>
      <div className="mt-6 px-4 py-6 bg-teal-100 text-black">
        <TodoForm />
        <Table />
      </div>
    </div>
  );
}

export default App;
