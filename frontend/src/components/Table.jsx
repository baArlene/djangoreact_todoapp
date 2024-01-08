import React, { useState } from "react";
import axios from "axios";
import {
  MdOutlineDeleteOutline,
  MdEditNote,
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const Table = ({ todos, setTodos, loading }) => {
  const [editText, setEditText] = useState({
    body: "",
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/todo/${id}/`);
      const newList = todos.filter((todo) => todo.id !== id);
      setTodos(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, value) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/todo/${id}/`,
        value
      );
      const newTodos = todos.map((todo) =>
        todo.id === id ? response.data : todo
      );
      setTodos(newTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckbox = (id, value) => {
    handleEdit(id, {
      completed: !value,
    });
  };

  const handleChange = (e) => {
    setEditText((prev) => ({
      ...prev,
      body: e.target.value,
    }));
    console.log(editText);
  };

  const handleClick = () => {
    handleEdit(editText.id, editText);
    setEditText({
      'body':''
    })
  };

  return (
    <div>
      <table className="w-11/12 max-w-4xl mx-auto">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="text-xl p-3 tracking-wide text-center font-semibold">
              Checkbox
            </th>
            <th className="text-xl p-3 tracking-wide text-center font-semibold">
              Task
            </th>
            <th className="text-xl p-3 tracking-wide text-center font-semibold">
              Status
            </th>
            <th className="text-xl p-3 tracking-wide text-center font-semibold">
              Date Created
            </th>
            <th className="text-xl p-3 tracking-wide text-center font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <p>Data Loading.....</p>
          ) : (
            <>
              {todos.map((todoItem, index) => {
                return (
                  <tr key={todoItem.id} className="border-b border-gray-500">
                    <td className="text-lg p-3" title={todoItem.id}>
                      <span
                        onClick={() =>
                          handleCheckbox(todoItem.id, todoItem.completed)
                        }
                      >
                        {todoItem.completed ? (
                          <MdOutlineCheckBox
                            className="text-teal-500 mx-auto cursor-pointer"
                            size={30}
                          />
                        ) : (
                          <MdOutlineCheckBoxOutlineBlank
                            className="text-teal-500 mx-auto cursor-pointer"
                            size={30}
                          />
                        )}
                      </span>
                    </td>
                    <td className="text-lg p-3 text-center font-normal">
                      {todoItem.body}
                    </td>
                    <td className="text-lg p-3 text-center font-normal">
                      <span
                        className={`p-2 font-medium tracking-wider rounded-md ${
                          todoItem.completed ? "bg-teal-300" : "bg-red-300"
                        } `}
                      >
                        {todoItem.completed ? "Complete" : "Incomplete"}
                      </span>
                    </td>
                    <td className="text-lg p-3 text-center font-normal">
                      {new Date(todoItem.created).toLocaleDateString()}
                    </td>
                    <td className="flex text-lg p-3 items-center justify-between">
                      <span>
                        <label htmlFor="my_modal_6" className="btn">
                          <MdEditNote
                            onClick={() => setEditText(todoItem)}
                            className="text-blue-700 cursor-pointer"
                            size={30}
                          />
                        </label>
                      </span>
                      <span>
                        <MdOutlineDeleteOutline
                          onClick={() => handleDelete(todoItem.id)}
                          className="text-red-700 cursor-pointer"
                          size={30}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Task</h3>
          <input
            type="text"
            value={editText.body}
            onChange={handleChange}
            className="input input-bordered w-full mt-8"
          />
          <div className="modal-action">
            <label
              onClick={handleClick}
              htmlFor="my_modal_6"
              className="btn btn-primary"
            >
              Edit
            </label>
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
