
import { ADD_TODO } from '../actions';
import { RENDER_TODO_LIST } from '../actions';
import { DELETE_TODO } from '../actions';


const initialState = {
  toDoList: [] 
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    //To render all tasks
    case RENDER_TODO_LIST:
        return {
          ...state,
          toDoList: action.toDoList
        };
    // Add a new task
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem
        }
      ];
      return {
        ...state,
        toDoList: newToDoList
      };
    //Delete a task
    case DELETE_TODO:
      console.log("In delete");
      return {
        ...state,
        toDoList:[ 
                    ...state.toDoList.filter(toDoItem => toDoItem.id !== action.toDoItem)
                 ]
      } 
  
    default:
      return state;
  }
}