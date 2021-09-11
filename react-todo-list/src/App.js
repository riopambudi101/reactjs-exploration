import { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const getItemData = () =>
    fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then((res) => res.json())
      .then((result) => setTodos(result));

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    getItemData();
  }, []);

  return (
    <div className="container mx-auto pt-3" style={{ maxWidth: '30rem' }}>
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
