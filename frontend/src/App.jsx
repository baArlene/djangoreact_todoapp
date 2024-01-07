import { useEffect, useState } from "react";
import axios from 'axios'
import TodoForm from "./components/TodoForm";
import Table from "./components/Table";

function App() {

  const [todos, setTodos] = useState('')
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/todo/')
      setTodos(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
    console.log(todos);
  }, [])

  return (
    <div className="bg-teal-900 text-white">
      <nav className="p-8">
        <h1 className="text-5xl text-center font-semibold">Todo App</h1>
      </nav>
      <div className="px-4 py-6 bg-slate-200 text-black">
        <TodoForm />
        <Table 
          todos = {todos}
          setTodos = {setTodos}
          loading = {loading}
        />
      </div>
    </div>
  );
}

export default App;
