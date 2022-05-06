import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const RowTwo = () => {

    return (
        <Row>
            <Col xs={3}>
            <Button variant="outline-primary">1</Button>{' '}
            </Col>
            <Col xs={3}>
            <Button variant="outline-primary">2</Button>{' '}
            </Col>
            <Col xs={3}>
            <Button variant="outline-primary">3</Button>{' '}
            </Col>
            <Col xs={3}>
            <Button variant="outline-primary">X</Button>{' '}
            </Col>
        </Row>
    );
};

export default RowTwo;