
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from '../containers/AddToDo';
import UpdateToDo from '../containers/UpdateToDo';

import ToDoListContainer from '../containers/ToDoListContainer';

import { Route } from 'react-router-dom';
import Navigation from '../components/Navigation';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="content">
        <Row className="row">
          <Col xs={12}>
            <h1>Tasks to do</h1>
            <Navigation />
            <Route exact path="/" component={ToDoListContainer} />
            <Route exact path="/new-item" component={AddToDo} />
            <Route exact path="/update-item" component={UpdateToDo} />
          </Col>
        </Row>
        </div>
      </Container>
      
    );
  }
}
export default App;
