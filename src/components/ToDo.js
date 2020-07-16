import React from 'react';
import PropTypes from 'prop-types';
//import { Button } from 'react-bootstrap';

const ToDo = ({ title, remarks }) => <tr>
                                      <td>{title}</td>
                                      <td>{remarks}</td>
                                    </tr>;
console.log(ToDo);

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  remarks: PropTypes.string.isRequired
};

export default ToDo;