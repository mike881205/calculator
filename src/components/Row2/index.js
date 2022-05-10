import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const RowTwo = ({setters}) => {

    const {setVal, setOp} = setters;
    const handleValClick = e => {
        const input = e.target.value;
        setVal(input);
    };
    const handleOpClick = e => {
        const input = e.target.value;
        setOp(input);
    };

    return (
        <Row>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
                <Button variant="outline-primary" value={"1"} onClick={e => handleValClick(e)}>1</Button>{' '}
            </Col>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
                <Button variant="outline-primary" value={"2"} onClick={e => handleValClick(e)}>2</Button>{' '}
            </Col>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
                <Button variant="outline-primary" value={"3"} onClick={e => handleValClick(e)}>3</Button>{' '}
            </Col>
            <Col xs={3} style={{ borderStyle: 'solid' }}>
                <Button variant="outline-primary" value={"x"} onClick={e => handleOpClick(e)}>X</Button>{' '}
            </Col>
        </Row>
    );
};

export default RowTwo;