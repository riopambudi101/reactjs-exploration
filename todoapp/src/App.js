import { useEffect, useState } from 'react';
import Add from './components/Add';

import Header from './components/Header';
import List from './components/List';

function App() {
  const getItemData = () =>
    fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then((res) => res.json())
      .then((result) => setTodos(result));

  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [status, setStat] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // console.log(editTodo);

  useEffect(() => {
    getItemData();
  }, []);

  return (
    <div className="mx-auto mt-4" style={{ maxWidth: '30rem' }}>
      <Header />
      <Add
        todos={todos}
        setTodos={setTodos}
        title={title}
        setTitle={setTitle}
        description={description}
        setDesc={setDesc}
        status={status}
        setStat={setStat}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <List todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
