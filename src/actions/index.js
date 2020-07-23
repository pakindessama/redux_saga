export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';
export const DELETE_TODO = 'DELETE_TODO';


export function addToDo(title, remarks) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: (new Date().getTime()), // The ID will be represented by the time
      title,
      remarks
    }
  };
}

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}

//Deleting a task
export const deleteTask = (toDoItem)=> {
  return {
    type: DELETE_TODO,
    toDoItem: toDoItem,
  };
}

