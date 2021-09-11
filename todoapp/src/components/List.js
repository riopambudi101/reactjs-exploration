import React, { useState } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import ItemModal from '../modals/ItemModal';

export default function List({ todos, setTodos, setEditTodo }) {
  const completed = todos.filter((item) => {
    return item.status === 1 || item.status === true;
  });

  const incompleted = todos.filter((item) => {
    return item.status === 0 || item.status === false;
  });

  const [detail, setDetail] = useState('');

  const handleShow = (item) => {
    toggle();
    setDetail(item);
    // console.log(item);
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <ListGroup className="mt-4 mb-16">
      <h4>Belum Selesai</h4>
      {incompleted.map((item) => {
        return (
          <Button
            key={item.id}
            color="link"
            className="text-left p-0 mt-2"
            onClick={() => {
              handleShow(item);
            }}
          >
            <ListGroupItem>{item.title}</ListGroupItem>
          </Button>
        );
      })}
      <h4 className="mt-4">Selesai</h4>
      {completed.map((item) => {
        return (
          <Button
            key={item.id}
            color="link"
            className="text-left p-0 mt-2"
            onClick={() => {
              handleShow(item);
            }}
          >
            <ListGroupItem>{item.title}</ListGroupItem>
          </Button>
        );
      })}

      <ItemModal
        modal={modal}
        toggle={toggle}
        detail={detail}
        todos={todos}
        setTodos={setTodos}
        setModal={setModal}
        setEditTodo={setEditTodo}
      />
    </ListGroup>
  );
}
