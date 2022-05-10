import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const RowOne = ({setOp}) => {

    const handleOpClick = e => {
        const input = e.target.value;
        setOp(input);
    }

    return (
        <Row>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
                <Button variant="outline-primary" >AC/C</Button>{' '}
            </Col>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
                <Button variant="outline-primary" >+/-</Button>{' '}
            </Col>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
                <Button variant="outline-primary" >%</Button>{' '}
            </Col>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
                <Button variant="outline-primary" value={"/"} onClick={e => handleOpClick(e)}>/</Button>{' '}
            </Col>
        </Row>
    );
};

export default RowOne;