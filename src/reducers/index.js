
import { ADD_TODO } from '../actions';
import { RENDER_TODO_LIST } from '../actions';
import { DELETE_TODO } from '../actions';
import { UPDATE_TODO } from '../actions';
import update from 'react-addons-update';

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
      return {
        ...state,
        toDoList:[ 
                    ...state.toDoList.filter(toDoItem => toDoItem.id !== action.toDoItem)
                 ]
      } 
    
      case UPDATE_TODO:
        console.log("In Update");
        console.log(action.item);
        
        // return {
        //   ...state,
        //   toDoList:[ 
        //               ...state.toDoList.filter(toDoItem => toDoItem.id !== action.item.id)
        //            ]
        // } 
  
    default:
      return state;
  }
}