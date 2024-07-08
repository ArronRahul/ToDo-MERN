import '../App.css';
import { useState } from 'react';
import {markTodo,deleteTodo} from '../servies/connect'
import AddTask from './AddTask';

const AddTaskCom = ({task,setmodedata}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    markTodo(task);
    setmodedata(true)
};
const isPastDue = new Date(task.date) < new Date();
    
function formatDate(dateString) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  return (
    <div className="task-x">
      <div className="inner-taskspace">
      <div className="custom-checkbox-container">
          <label className="custom-checkbox-label">
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <img
              className="custom-checkbox-image"
              src={task.complete? "src/assets/tik.svg" : "src/assets/untik.svg"}
              alt="Checkbox Image"
            />
          </label>
        </div>
        <div className="task-card">
          <div className="task-header">
            <div className="name-tik">
              <p className="task-name">{task.title}</p>
              <span className={task.complete? "span-green" : "span-yellow"}></span>

            </div>
            <div className="edit-delete">
              <img
                className="edit-icon"
                src="src/assets/edit.svg"
                alt="Edit"
                onClick={handleShow}
              />
              <img
                className="delete-icon"
                src="src/assets/delete.svg"
                alt="Delete"
                onClick={()=>deleteTodo(task.id).then(setmodedata(true))}
              />
            </div>
          </div>
          <p className="task-paragraph">{task.description}</p>
          <div className={isPastDue? "col-date-red": "col-date"}>
            <img
              className="col-img"
              alt="Calendar"
              src={isPastDue? "src/assets/cal2.svg" : "src/assets/cal1.svg"}
            />
    <p className={isPastDue? "by-date2": "by-date1"}> by {formatDate(task.date)} </p>
          </div>
        </div>
      </div>
      <AddTask
        task={task}
        show={show}
        handleClose={handleClose}
        setmodedata={setmodedata}
      />
    </div>
    
  );
};


export default AddTaskCom;