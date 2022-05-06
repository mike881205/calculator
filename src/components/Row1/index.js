import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const RowOne = () => {

    return (
        <Row>
            <Col xs={3}>
                <Button variant="outline-primary">AC/C</Button>{' '}
            </Col>
            <Col xs={3}>
                <Button variant="outline-primary">+/-</Button>{' '}
            </Col>
            <Col xs={3}>
                <Button variant="outline-primary">%</Button>{' '}
            </Col>
            <Col xs={3}>
                <Button variant="outline-primary">/</Button>{' '}
            </Col>
        </Row>
    );
};

export default RowOne;