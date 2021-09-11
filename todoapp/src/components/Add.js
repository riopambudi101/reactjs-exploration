import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function Add(props) {
  const {
    todos,
    setTodos,
    title,
    setTitle,
    description,
    setDesc,
    status,
    setStat,
    editTodo,
    setEditTodo,
  } = props;

  const checkElement = document.getElementById('check-type');

  const checkType = (item) => {
    item === true || item === 1
      ? (checkElement.checked = true)
      : (checkElement.checked = false);
  };

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDesc(editTodo.description);
      if (editTodo.status === 1 || editTodo.status === true) {
        checkType(true);
        setStat(editTodo.status);
      } else {
        checkType(false);
        setStat(editTodo.status);
      }
    } else {
      setTitle('');
      setDesc('');
    }
  }, [setTitle, setDesc, setStat, editTodo]);

  const updateTodo = (title, id, description, status) => {
    if (status === true) {
      checkType(false);
      const newTodo = todos.map((todo) =>
        todo.id === id ? { title, id, description, status } : todo
      );
      setTodos(newTodo);
      setEditTodo('');
      checkType(false);
    } else {
      checkType(true);
      const newTodo = todos.map((todo) =>
        todo.id === id ? { title, id, description, status } : todo
      );
      setTodos(newTodo);
      setEditTodo('');
      checkType(false);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!editTodo) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: title,
          description: description,
          status: status,
        },
      ]);
      setTitle('');
      setDesc('');
      setStat(false);
      checkType(false);
    } else {
      updateTodo(title, editTodo.id, description, status);
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input
          required
          type="text"
          value={title}
          placeholder="Add your title todo..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input
          required
          type="text"
          value={description}
          placeholder="Add description for your todo..."
          onChange={(e) => setDesc(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="check-type"
          type="checkbox"
          value={status}
          onChange={(e) => setStat(e.target.checked)}
        />{' '}
        isDone
      </FormGroup>
      <Button type="submit" color="success" className="mt-2 px-4">
        Submit
      </Button>
    </Form>
  );
}
