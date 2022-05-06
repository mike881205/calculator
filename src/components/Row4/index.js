import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const RowFour = () => {

    return (
        <Row>
            <Col xs={3}>
            <Button variant="outline-primary">7</Button>{' '}
            </Col>
            <Col xs={3}>
            <Button variant="outline-primary">8</Button>{' '}
            </Col>
            <Col xs={3}>
            <Button variant="outline-primary">9</Button>{' '}
            </Col>
            <Col xs={3}>
            <Button variant="outline-primary">+</Button>{' '}
            </Col>
        </Row>
    );
};

export default RowFour;