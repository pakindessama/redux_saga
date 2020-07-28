// ./src/containers/AddToDo.js

import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

let AddToDo = ({ dispatch }) => {
  let task;
  let remarks;

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!task.value.trim()) {
          return;
        }
        dispatch(addToDo(task.value, remarks.value));
        task.value = '';
        remarks.value = '';
      }}
    > 
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter a task"
            ref={node => {
              task = node;
            }} 
          /> 
          <Form.Control
            type="text"
            placeholder="Enter the remarks if any"
            ref={node => {
              remarks = node;
            }}
          /> 
          <InputGroup.Append>
            <Button type="submit">Add</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
AddToDo = connect()(AddToDo);

export default AddToDo;