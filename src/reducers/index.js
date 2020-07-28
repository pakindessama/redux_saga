
import { ADD_TODO } from '../actions';
import { RENDER_TODO_LIST } from '../actions';
import { DELETE_TODO } from '../actions';
import { UPDATE_TODO } from '../actions';

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
        console.log(state)
        const temp = Object.assign({}, state, {
          data: state.toDoList.map(item => {
           return item.id === action.item.id ? action.item: item;
          }) // replace matched item and returns the array 
       }); 
       console.log("TEMP:",temp.data)
       return {
        ...state,
        toDoList: temp.data
      };
  
    default:
      return state;
  }
}