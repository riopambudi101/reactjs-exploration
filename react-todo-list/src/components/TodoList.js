import React from 'react';

export default function TodoList({ todos, setTodos }) {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  //   const handleDelete = (item) => {
  //     setTodos(todos.filter((todo) => todo.id !== item.id));
  //   };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="list-todos mt-3">
      <ul>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center border-2 border-gray-300 rounded-md mt-2 p-2"
          >
            <li>{todo.title}</li>
            <div>
              <button
                className="bg-blue-500 btn-list mr-1"
                onClick={() => handleComplete(todo)}
              >
                Done
              </button>
              {/* <button className="bg-green-500 btn-list mr-1" onClick="">
                Edit
              </button> */}
              <button
                className="bg-red-500 btn-list mr-1"
                onClick={() => handleDelete(todo)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
