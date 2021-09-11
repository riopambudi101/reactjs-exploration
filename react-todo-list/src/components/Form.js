import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

export default function Form(props) {
  const { input, setInput, todos, setTodos, editTodo, setEditTodo } = props;

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);

  const updateTodo = (title, id, completed) => {
    // console.log(title, id, completed);
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    // console.log(newTodo);
    setEditTodo('');
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onBtnSubmit = (event) => {
    event.preventDefault();

    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onBtnSubmit}>
      <input
        type="text"
        className="border-2 border-gray-300 rounded-md mr-2 p-2 w-10/12"
        placeholder="Enter todo"
        required
        value={input}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="bg-green-500 px-3 py-2 rounded-md text-white font-bold text-lg"
      >
        Add
      </button>
    </form>
  );
}
