import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ input, setInput, todos, setTodos }) {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onBtnSubmit = (event) => {
    event.preventDefault();

    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput('');
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
