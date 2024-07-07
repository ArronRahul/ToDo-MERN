
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import { deleteTodo } from '../servies/connect';

function DeleteModal(show, deleteClose) {

      return (
        <>
          <Modal show={show} onHide={deleteClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={deleteClose}>
                Close
              </Button>
              <Button variant="primary" onClick={deleteClose} >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    


export default DeleteModal