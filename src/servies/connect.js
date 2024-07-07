import axios from "axios";
import { CREATE,DELETE } from "./api";

export const createTodo = async (todo) => {
  const { title, description, date ,complete} = todo;
  try {
    const response = await axios.post(`${CREATE}`, {
      title: title,
      description: description,
      date: date,
      complete: complete,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const displayTodo = async () => {
    try {
      const response = await axios.get(`${CREATE}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  export const deleteTodo = async(id)=>{
    try {
      const response = await axios.delete(`${CREATE}`,{
         id: id,
      });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }


  export const markTodo = async (todo) => {
    const { id, title, description, date, complete } = todo;
    
    try {
      const response = await axios.put(`${CREATE}`, {
        id: id,
        title: title,
        description: description,
        date: date,
        complete: complete,
      });
      return response;
    } catch (error) {
      console.error('Error updating task:', error);
      return error;
    }
  };

  export const clearallTodo= async()=>{
    try {
        const response = await axios.delete(`${DELETE}`);
        return response.data;
      } catch (error) {
        console.log(error);
        return error;
      }
  }
  
