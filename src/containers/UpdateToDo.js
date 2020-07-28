// ./src/containers/AddToDo.js

import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {updateTask} from '../actions'
import { useHistory } from "react-router-dom";


let UpdateToDo = (props) => {

  const history = useHistory();     
  let taskCell;
  let remarksCell;

  let item = {
    task : props.location.state.task,
    remarks : props.location.state.remarks,
    id : props.location.state.id
  };

  const handleTaskChange = (e)=>{
    item.task = e.target.value
  }

  const handleRemarkChange = (e)=>{
    item.remarks = e.target.value
  }

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
       
        props.updateTask(item);
        return history.push('/');
      }}
    > 
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            defaultValue={item.task}
            onChange={handleTaskChange}

            ref={node => {
              taskCell = node;
            }}
          /> 
          <Form.Control
            type="text"
            defaultValue={item.remarks}
            onChange={handleRemarkChange}
            ref={node => {
              remarksCell = node;
            }}
          /> 
          <InputGroup.Append>
            <Button type="submit">Update</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

const mapDispatchToProps = dispatch =>{
  return {
    updateTask : item => dispatch(updateTask(item))
  };
}

export default connect (
  null,
  mapDispatchToProps,
  ) (UpdateToDo);