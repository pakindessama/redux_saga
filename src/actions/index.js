export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';


export function addToDo(task, remarks) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: task, remarks:remarks })
  };     
  fetch('https://glz83g3jo3.execute-api.us-west-1.amazonaws.com/putdb', requestOptions)
        .then(response => response.json())
        .then();

  return {
    type: ADD_TODO,
    toDoItem: {
      task,
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
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: toDoItem })
  };     
  fetch('https://67gdlqwyy3.execute-api.us-west-1.amazonaws.com/prod', requestOptions)
        .then(response => response.json())
        .then();

  return {
    type: DELETE_TODO,
    toDoItem: toDoItem,
  };
}

//Updating a task
export const updateTask = (item)=> {
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  };
  fetch('https://bu1ldqqtoe.execute-api.us-west-1.amazonaws.com/updb', requestOptions)
        .then(response => response.json())
        .then();

  return {
    type: UPDATE_TODO,
    item
  };
}

