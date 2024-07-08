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
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('date-desc'); 


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
  }, [modedata,sortOrder]);



  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
  
      if (sortOrder === 'date-desc') {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
  };
  

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  

  


const filteredIncompleteTasks = incompleteTasks.filter(task =>
  task.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const filteredCompletedTasks = completedTasks.filter(task =>
  task.title.toLowerCase().includes(searchQuery.toLowerCase())
);
const sortedIncompleteTasks = sortTasks(filteredIncompleteTasks, sortOrder);
const sortedCompletedTasks = sortTasks(filteredCompletedTasks, sortOrder);

  return (
    <>
      <div className="navbar">
        <h1 className="navbar-heading">My Tasks</h1>
        <Button className="addnewtask" variant="primary" onClick={handleShow}>Add New Task</Button>
      </div>
      <hr />
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} sortOrder={sortOrder} handleSortChange={handleSortChange} />
      <div className="added-main">
        <p className="task_heading">Active Tasks</p>
        <div className="task_listing-page" id="task-list">
        {sortedIncompleteTasks.map((task) => (
          <AddTaskCom
            key={task.id} task={task} setmodedata={setmodedata} handleShow={handleShow}/>))}
          </div>
        </div>
        <div className="complete-main">
        <div className="navbar">
            <p className="task_heading">Completed Tasks</p>
            <Button variant="outline-primary" onClick={()=>clearallTodo().then(setmodedata(true))}>Clear Completed Tasks</Button>
        </div>
        {sortedCompletedTasks.map((task) => (
          <AddTaskCom
            key={task.id} task={task} setmodedata={setmodedata} handleShow={handleShow} />))}
        </div>

      <AddTask
        task={false}
        show={show}
        handleClose={handleClose}
        setmodedata={setmodedata}
      />

    </>
  );
}

export default App;
