import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ItemModal from '../modals/ItemModal';

export default function List(props) {
  const { todos, setTodos, setEditTodo, title, description, status } = props;

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
          <ListGroupItem
            key={item.id}
            className="text-left mt-2 cursor-pointer border-1 border-gray-200 rounded-md"
            onClick={() => {
              handleShow(item);
            }}
          >
            {item.title}
          </ListGroupItem>
        );
      })}
      <h4 className="mt-4">Selesai</h4>
      {completed.map((item) => {
        return (
          <ListGroupItem
            key={item.id}
            className="text-left mt-2 cursor-pointer border-1 border-gray-200 rounded-md"
            onClick={() => {
              handleShow(item);
            }}
          >
            {item.title}
          </ListGroupItem>
        );
      })}

      <ItemModal
        modal={modal}
        setModal={setModal}
        toggle={toggle}
        detail={detail}
        todos={todos}
        title={title}
        description={description}
        status={status}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
    </ListGroup>
  );
}
