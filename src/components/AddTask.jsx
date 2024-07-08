import '../App.css';
import { useState , useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createTodo} from '../servies/connect'

const AddTask = ({ show, handleClose ,setmodedata, task}) => {
  const [id, setid] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState([]);
  const [complete,setComplete]=useState(false)


  useEffect(() => {
    if (task) {
      setid(task.id);
      setTitle(task.title);
      setDescription(task.description);
      setDate(task.date);
      setComplete(task.complete);
    } else {
      setid('1');
      setTitle('');
      setDescription('');
      setDate('');
      setComplete(false);
    }
  },[id]);
  

  const handleSave = () => {
    const task = {id,title, description, date, complete };
    console.log("task",task);
    createTodo(task);
    setmodedata(true)
    handleClose();
    setid("")
    setTitle('')
    setDescription('')
    setDate('')
    setComplete(false)
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{task?"Edit Task":"Add Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              placeholder='eg: Create two ad banners'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description <img src='src/assets/Help outline.svg'></img></Form.Label>
            <Form.Control
              as="textarea"
              placeholder='Add your task description.'
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Due Date</Form.Label>
            <Form.Control
              placeholder='21-07-2022'
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="cancel-button" variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button className='add-button' variant="primary" onClick={handleSave}>
        {task?"Update":"Add Task"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTask;
