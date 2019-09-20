import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GraphqlTest from './GraphqlTest';
import Counter from './Counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function AppShell() {
  return (
    <Container>
      <Row>
        <Col>
          <Counter />
        </Col>
      </Row>
      <Row>
        <Col>
          <GraphqlTest />
        </Col>
      </Row>
    </Container>
  );
}

export default AppShell;
