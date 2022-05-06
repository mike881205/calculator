import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const RowFive = () => {

    return (
        <Row>
            <Col xs={6}>
            <Button variant="outline-primary">0</Button>{' '}
            </Col>
            <Col xs={3}>
            <Button variant="outline-primary">.</Button>{' '}
            </Col>
            <Col xs={3}>
            <Button variant="outline-primary">=</Button>{' '}
            </Col>
        </Row>
    );
};

export default RowFive;