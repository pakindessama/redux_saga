import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';
import Table from 'react-bootstrap/Table'



const ToDoList = ({ toDoList }) => (
<Table responsive>    
    <thead>
      <tr>
        <th>Task</th> 
        <th>Remarks</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {toDoList.map((toDo, index) => (
          <ToDo key={index} {...toDo} />
        ))}
    </tbody>
</Table>
);

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      remarks: PropTypes.string
    }).isRequired
  ).isRequired
};

export default ToDoList;
