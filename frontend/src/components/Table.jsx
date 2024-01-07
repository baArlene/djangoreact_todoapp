import React from "react";
import {
  MdOutlineDeleteOutline,
  MdEditNote,
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const Table = ({ todos, setTodos, loading }) => {
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
                    <td className="text-lg p-3" title={todoItem.id} >
                      <span>
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
                      <span className={`p-2 font-medium tracking-wider rounded-md ${todoItem.completed ? 'bg-teal-300' : 'bg-red-300'} `}>
                      {todoItem.completed ? 'Complete' : 'Incomplete'}
                      </span>
                    </td>
                    <td className="text-lg p-3 text-center font-normal">
                      {new Date(todoItem.created).toLocaleDateString()}
                    </td>
                    <td className="flex text-lg p-3 items-center justify-between">
                      <span>
                        <MdEditNote
                          className="text-blue-700 cursor-pointer"
                          size={30}
                        />
                      </span>
                      <span>
                        <MdOutlineDeleteOutline
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
    </div>
  );
};

export default Table;
