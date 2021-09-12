import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function ItemModal(props) {
  const { modal, toggle, detail, todos, setTodos, setModal, setEditTodo } =
    props;

  const handleEdit = ({ id }) => {
    const findItem = todos.find((item) => item.id === id);
    setEditTodo(findItem);
    setModal(false);
    window.scrollTo(0, 0);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((item) => item.id !== id));
    setModal(false);
  };

  const btnCompleteOrIncomplete = () => {
    if (detail.status === 1 || detail.status === true) {
      return (
        <Button color="success" onClick={() => handleEdit(detail)}>
          Edit
        </Button>
      );
    } else {
      return (
        <div>
          <Button color="success" onClick={() => handleEdit(detail)}>
            Edit
          </Button>{' '}
          <Button color="danger" onClick={() => handleDelete(detail)}>
            Delete
          </Button>
        </div>
      );
    }
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{detail.title}</ModalHeader>
        <ModalBody>{detail.description}</ModalBody>
        <ModalFooter>{btnCompleteOrIncomplete()}</ModalFooter>
      </Modal>
    </div>
  );
}
