import React from "react";
import { Row, Col } from "react-bootstrap";

const Display = ({ displayVal }) => {

    return (
        <Row style={{ marginBottom: '3%', height: '7vh', width: '18vw' }} align='right'>
            <Col xs={12} style={{ borderStyle: 'solid' }}>
                <h3>{displayVal}</h3>
            </Col>
        </Row>
    );
};

export default Display;