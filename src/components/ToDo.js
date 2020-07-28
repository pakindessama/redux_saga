import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import {deleteTask} from '../actions'
import { connect } from 'react-redux';

const ToDo = (props) => {                           
                          return( <tr>
                                    <td>{props.task}</td>
                                    <td>{props.remarks}</td>
                                    <td>
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
    deleteTask : ToDoItem => dispatch(deleteTask(ToDoItem))
  };
}

export default connect (
  null,
  mapDispatchToProps
) (ToDo);