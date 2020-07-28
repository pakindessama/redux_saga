import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import {deleteTask} from '../actions';
import {updateTask} from '../actions';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const ToDo = (props) => {           
                          const history = useHistory();     
                          return( 
                                
                                  <tr>
                                    <td>{props.task}</td>
                                    <td>{props.remarks}</td>
                                    <td> 
                                    <Button variant="primary" 
                                        onClick = {()=>{
                                                          history.push('/update-item', {id: props.id, task: props.task, remarks:props.remarks})
                                                      }}>
                                        Update
                                      </Button>
                                      <Button variant="danger" 
                                        onClick = {()=>props.deleteTask(props.id)}>
                                        Delete
                                      </Button>
                                    </td>
                                  </tr>
                                 
                          );
                        }

ToDo.propTypes = {
  task: PropTypes.string.isRequired,
  remarks: PropTypes.string.isRequired,
};
 
const mapDispatchToProps = dispatch =>{
  return {
    deleteTask : ToDoItem => dispatch(deleteTask(ToDoItem)),
    updateTask : ToDoItem => dispatch(updateTask(ToDoItem))
  };
}

export default connect (
  null,
  mapDispatchToProps,
) (ToDo);