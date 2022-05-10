import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const RowThree = () => {

    return (
        <Row>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
            <Button variant="outline-primary">4</Button>{' '}
            </Col>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
            <Button variant="outline-primary">5</Button>{' '}
            </Col>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
            <Button variant="outline-primary">6</Button>{' '}
            </Col>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
            <Button variant="outline-primary">-</Button>{' '}
            </Col>
        </Row>
    );
};

export default RowThree;