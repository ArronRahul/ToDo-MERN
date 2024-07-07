import './AddTaskCom.css';
import { useState } from 'react';
import {markTodo,deleteTodo} from '../servies/connect'

const AddTaskCom = ({task,setmodedata}) => {


    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    markTodo(task);
    setmodedata(true)
    

};
    
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
              <span className="span-yellow"></span>
            </div>
            <div className="edit-delete">
              <img
                className="edit-icon"
                src="src/assets/edit.svg"
                alt="Edit"
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
          <div className="col-date">
            <img
              className="col-img"
              alt="Calendar"
              src="src/assets/cal1.svg"
            />
    <p className="by-date-red">by {task.date} </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddTaskCom;