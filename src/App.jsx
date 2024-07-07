import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import AddTask from './components/AddTask';
import SearchBar from './components/SearchBar';
import AddTaskCom from './components/AddTaskCom';
import { displayTodo,clearallTodo } from './servies/connect';


function App() {
  const [modedata,setmodedata]= useState(false)
  const [show, setShow] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {
    displayTodo()
      .then(data => {
        if (data) {
          const completed = data.filter(task => task.complete);
          const incomplete = data.filter(task => !task.complete);
          setCompletedTasks(completed);
          setIncompleteTasks(incomplete);
        }
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
      setmodedata(false)
  }, [modedata]);
  return (
    <>
      <div className="navbar">
        <h1 className="navbar-heading">My Tasks</h1>
        <Button variant="primary" onClick={handleShow}>Add New Task</Button>
      </div>
      <hr />
      <SearchBar/>
      <div className="added-main">
        <p className="task_heading">Active Tasks</p>
        <div className="task_listing-page" id="task-list">
        {incompleteTasks.map((task) => (
          <AddTaskCom
            key={task.id} task={task} setmodedata={setmodedata} handleShow={handleShow}/>))}
          </div>
        </div>
        <div className="complete-main">
        <div className="navbar">
            <p className="navbar-heading">Completed Tasks</p>
            <Button variant="outline-primary" onClick={()=>clearallTodo().then(setmodedata(true))}>Clear Completed Tasks</Button>
        </div>
        {completedTasks.map((task) => (
          <AddTaskCom
            key={task.id} task={task} setmodedata={setmodedata} handleShow={handleShow} />))}
        </div>

      <AddTask
        show={show}
        handleClose={handleClose}
        setmodedata={setmodedata}
      />

    </>
  );
}

export default App;
